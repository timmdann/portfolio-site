export default function Button({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  type,
  ...props
}) {
  const classes = [
    "group relative z-[1] overflow-hidden",
    "inline-flex items-center justify-center",
    "px-6 py-2 m-[0.5em] rounded-[1.5em]",
    "text-[hsl(var(--foreground))] border border-[hsl(var(--border))]",
    "transition-colors duration-300",
    className,
  ].join(" ");

  const isHash = href?.startsWith("#");
  const Comp = href ? "a" : "button";

  const defaultTarget = !isHash && href ? "_blank" : undefined;
  const safeRel =
    (target || defaultTarget) === "_blank" ? rel ?? "noopener noreferrer" : rel;

  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (!href) return;

    if (isHash) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if ((target || defaultTarget) === "_blank") {
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <Comp
      {...props}
      onClick={handleClick}
      className={classes}
      {...(Comp === "a"
        ? { href, target: target ?? defaultTarget, rel: safeRel }
        : { type: type ?? "button" })}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[hsl(var(--background))]">
        {children}
      </span>

      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-y-0 left-[-20%] right-[-20%]
          -z-10 bg-[hsl(var(--foreground))]
          [transform:skewX(-45deg)_scaleX(0)]
          transition-transform duration-300 ease-linear
          group-hover:[transform:skewX(-45deg)_scaleX(1)]
        "
      />
    </Comp>
  );
}
