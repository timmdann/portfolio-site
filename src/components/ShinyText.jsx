import { cn } from "../lib/utils";

const shimmerGradient =
  "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.9) 45%, rgba(255, 255, 255, 0.05) 100%)";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text",
        disabled ? "text-[#b5b5b5a4]" : "text-transparent animate-shine",
        className,
      )}
      style={{
        backgroundImage: disabled ? undefined : shimmerGradient,
        backgroundSize: "200% 100%",
        backgroundPosition: "200% center",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
