import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";
import {
  Root,
  Track,
  List,
  Item,
  Node,
  Img,
  Link,
  ScaleStyles,
  ReduceMotion,
} from "./styles";
const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const toCssLength = (v) => (typeof v === "number" ? `${v}px` : v ?? undefined);

const useResizeObserver = (callback, elements, deps) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handle = () => callback();
      window.addEventListener("resize", handle);
      callback();
      return () => window.removeEventListener("resize", handle);
    }
    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const ob = new ResizeObserver(callback);
      ob.observe(ref.current);
      return ob;
    });
    callback();
    return () => observers.forEach((ob) => ob?.disconnect());
  }, deps);
};

const useImageLoader = (seqRef, onLoad, deps) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    let left = images.length;
    const done = () => {
      left -= 1;
      if (left === 0) onLoad();
    };
    images.forEach((img) => {
      if (img.complete) done();
      else {
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    });
    return () =>
      images.forEach((img) => {
        img.removeEventListener("load", done);
        img.removeEventListener("error", done);
      });
  }, deps);
};

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  isHovered,
  pauseOnHover
) => {
  const rafRef = useRef(null);
  const lastTs = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (seqWidth > 0) {
      offset.current = ((offset.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offset.current}px,0,0)`;
    }

    const animate = (ts) => {
      if (lastTs.current === null) lastTs.current = ts;
      const dt = Math.max(0, ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easing = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocity.current += (target - velocity.current) * easing;

      if (seqWidth > 0) {
        let next = offset.current + velocity.current * dt;
        next = ((next % seqWidth) + seqWidth) % seqWidth;
        offset.current = next;
        track.style.transform = `translate3d(${-offset.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTs.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  scaleOnHover = false,
  fadeOut = false,
  ariaLabel = "Partner logos",
  className,
  style,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMul = direction === "left" ? 1 : -1;
    const speedMul = speed < 0 ? -1 : 1;
    return magnitude * directionMul * speedMul;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded =
        Math.ceil(containerWidth / sequenceWidth) +
        ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(
    updateDimensions,
    [containerRef, seqRef],
    [logos, gap, logoHeight]
  );
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsHovered(false);
  }, [pauseOnHover]);

  const renderLogoItem = useCallback((item, key) => {
    const isNodeItem = "node" in item;
    const content = isNodeItem ? (
      <Node aria-hidden={!!item.href && !item.ariaLabel}>{item.node}</Node>
    ) : (
      <Img
        src={item.src}
        srcSet={item.srcSet}
        sizes={item.sizes}
        width={item.width}
        height={item.height}
        alt={item.alt ?? ""}
        title={item.title}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );

    const itemAriaLabel = isNodeItem
      ? item.ariaLabel ?? item.title
      : item.alt ?? item.title;
    const itemContent = item.href ? (
      <Link
        href={item.href}
        aria-label={itemAriaLabel || "logo link"}
        target="_blank"
        rel="noreferrer noopener"
      >
        {content}
      </Link>
    ) : (
      content
    );

    return (
      <Item key={key} role="listitem">
        {itemContent}
      </Item>
    );
  }, []);

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <List
          key={`copy-${copyIndex}`}
          role="list"
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((item, itemIndex) =>
            renderLogoItem(item, `${copyIndex}-${itemIndex}`)
          )}
        </List>
      )),
    [copyCount, logos, renderLogoItem]
  );

  const containerStyle = useMemo(
    () => ({ width: toCssLength(width) ?? "100%", ...style }),
    [width, style]
  );

  const ContentWrapper = scaleOnHover ? ScaleStyles : ReduceMotion;

  return (
    <Root
      ref={containerRef}
      className={className}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $gap={gap}
      $fadeOut={fadeOut}
      $logoHeight={logoHeight}
      $scaleOnHover={scaleOnHover}
    >
      <ContentWrapper>
        <Track ref={trackRef}>{logoLists}</Track>
      </ContentWrapper>
    </Root>
  );
});

LogoLoop.displayName = "LogoLoop";
export default LogoLoop;
