import styled, { css } from "styled-components";

const Root = styled.div`
  position: relative;
  overflow-x: hidden;

  --logoloop-gap: ${({ $gap = 32 }) => `${$gap}px`};
  --logoloop-logoHeight: ${({ $logoHeight = 28 }) => `${$logoHeight}px`};
  --logoloop-fadeColorAuto: var(--grey-0);

  @media (prefers-color-scheme: dark) {
    --logoloop-fadeColorAuto: var(--grey-900);
  }

  ${({ $scaleOnHover }) =>
    $scaleOnHover &&
    css`
      padding-top: calc(var(--logoloop-logoHeight) * 0.1);
      padding-bottom: calc(var(--logoloop-logoHeight) * 0.1);
    `}

  --fadeW: clamp(24px, 8%, 120px);

  ${({ $fadeOut }) =>
    $fadeOut &&
    css`
      mask-image: linear-gradient(
        to right,
        rgba(var(--grey-900-rgb), 0) 0,
        /* прозрачность от grey-900 */ var(--indigo-900) var(--fadeW),
        /* твой цвет */ var(--indigo-900) calc(100% - var(--fadeW)),
        rgba(var(--grey-900-rgb), 0) 100%
      );
      -webkit-mask-image: linear-gradient(
        to right,
        rgba(var(--grey-900-rgb), 0) 0,
        var(--indigo-900) var(--fadeW),
        var(--indigo-900) calc(100% - var(--fadeW)),
        rgba(var(--grey-900-rgb), 0) 100%
      );
    `}
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
  user-select: none;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  flex: 0 0 auto;
  margin-right: var(--logoloop-gap);
  font-size: var(--logoloop-logoHeight);
  line-height: 1;

  &:last-child {
    margin-right: var(--logoloop-gap);
  }
`;

const Node = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Img = styled.img`
  height: var(--logoloop-logoHeight);
  width: auto;
  display: block;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  -webkit-user-drag: none;
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

const ScaleStyles = styled.div`
  ${Item} {
    overflow: visible;
  }
  ${Item}:hover ${Img}, ${Item}:hover ${Node} {
    transform: scale(1.2);
    transform-origin: center center;
  }
  ${Node} {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ReduceMotion = styled.div`
  @media (prefers-reduced-motion: reduce) {
    ${Track} {
      transform: translate3d(0, 0, 0) !important;
    }
    ${Img}, ${Node} {
      transition: none !important;
    }
  }
`;

export { Root, Track, List, Item, Node, Img, Link, ScaleStyles, ReduceMotion };
