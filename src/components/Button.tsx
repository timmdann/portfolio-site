import { type ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils.ts";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsAnchor = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel" | "onClick">;

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<ComponentPropsWithoutRef<"button">, "type" | "onClick">;

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const baseClasses = [
  "group relative z-[1] overflow-hidden",
  "inline-flex items-center justify-center",
  "px-6 py-2 m-[0.5em] rounded-[1.5em]",
  "text-[hsl(var(--foreground))] border border-[hsl(var(--border))]",
  "transition-colors duration-300",
].join(" ");

export default function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { children, className, href, target, rel, onClick, ...rest } = props;
    const isHash = href.startsWith("#");
    const defaultTarget = !isHash ? "_blank" : undefined;
    const resolvedTarget = target ?? defaultTarget;
    const safeRel = resolvedTarget === "_blank" ? (rel ?? "noopener noreferrer") : rel;

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      if (isHash) {
        e.preventDefault();
        const el = document.getElementById(href.slice(1));
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (resolvedTarget === "_blank") {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <a
        {...rest}
        href={href}
        target={resolvedTarget}
        rel={safeRel}
        onClick={handleClick}
        className={cn(baseClasses, className)}
      >
        <ButtonInner>{children}</ButtonInner>
      </a>
    );
  }

  const { children, className, type = "button", onClick, ...rest } = props;

  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={cn(baseClasses, className)}
    >
      <ButtonInner>{children}</ButtonInner>
    </button>
  );
}

function ButtonInner({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[hsl(var(--background))]">
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[-20%] right-[-20%] -z-10 bg-[hsl(var(--foreground))] [transform:skewX(-45deg)_scaleX(0)] transition-transform duration-300 ease-linear group-hover:[transform:skewX(-45deg)_scaleX(1)]"
      />
    </>
  );
}
