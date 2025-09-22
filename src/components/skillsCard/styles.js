import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  border: 1px solid var(--indigo-900);
  background-color: rgb(var(--indigo-900-rgb, 25 24 59) / 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(40px);
  margin: 0 10%;
  padding: 10px;
  overflow: hidden;
  min-height: 400px;

  --fade: 280px;

  mask: linear-gradient(
    to right,
    transparent 0,
    #000 var(--fade),
    #000 calc(100% - var(--fade)),
    transparent 100%
  );
  -webkit-mask: linear-gradient(
    to right,
    transparent 0,
    #000 var(--fade),
    #000 calc(100% - var(--fade)),
    transparent 100%
  );

  --mouse-x: 50%;
  --mouse-y: 50%;
  --spotlight-color: rgba(var(--grey-0-rgb), 0.05);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      var(--spotlight-color),
      transparent 20%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover::before,
  &:focus-within::before {
    opacity: 0.6;
  }
`;
