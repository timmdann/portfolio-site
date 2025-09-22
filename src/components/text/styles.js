import styled, { keyframes, css } from "styled-components";

const shine = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

const ShinyTextWrapper = styled.div`
  color: #b5b5b5a4;
  background: linear-gradient(
    120deg,
    rgba(var(--grey-0-rgb), 0) 35%,
    rgba(var(--grey-0-rgb), 0.9) 47%,
    rgba(var(--grey-0-rgb), 1) 50%,
    rgba(var(--grey-0-rgb), 0.9) 53%,
    rgba(var(--grey-0-rgb), 0) 65%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;

  ${({ disabled, duration }) =>
    !disabled &&
    css`
      animation: ${shine} ${duration} linear infinite;
    `}
`;

const Wrapper = styled.div`
  display: inline-block;
  white-space: pre-wrap;
`;

const Content = styled.span``;

const Cursor = styled.span`
  margin-left: 0.25rem;
  display: inline-block;
  opacity: 1;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export { shine, ShinyTextWrapper, Wrapper, Content, Cursor };
