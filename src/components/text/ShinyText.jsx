import { shine, ShinyTextWrapper } from "./styles";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const duration = `${speed}s`;

  return (
    <ShinyTextWrapper
      className={className}
      disabled={disabled}
      duration={duration}
    >
      {text}
    </ShinyTextWrapper>
  );
};

export default ShinyText;
