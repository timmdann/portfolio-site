import { useRef } from "react";
import { Card } from "./styles";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(var(--grey-0-rgb), 0.25)",
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <Card ref={divRef} onMouseMove={handleMouseMove} className={className}>
      {children}
    </Card>
  );
};

export default SpotlightCard;
