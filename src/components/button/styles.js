import styled from "styled-components";

export const StyledButton = styled.button`
  width: 8.5em;
  height: 2.3em;
  margin: 0.5em;
  background-color: rgb(var(--indigo-900-rgb) / 1);
  color: var(--mist-50);
  border: 1px solid var(--mist-50);
  border-radius: 1.5em;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:hover {
    color: black;
  }

  &::after {
    content: "";
    background: white;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  &:hover::after {
    transform: skewX(-45deg) scale(1, 1);
    transition: all 0.5s;
  }
`;
