import styled from "styled-components";
import { motion } from "motion/react";

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileAlert = styled.div`
  position: absolute;
  top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

const Inner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;

  background: rgb(var(--indigo-900-rgb, 25 24 59) / 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(var(--grey-900-rgb), 0.08);
  box-shadow: 0 8px 22px rgba(var(--grey-900-rgb), 0.35);
`;

const Header = styled.div`
  flex: 0 0 30%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-weight: 700;
  color: var(--mist-50);
  border-bottom: 1px solid rgba(var(--grey-900-rgb), 0.06);
  transform: translateZ(0);
`;

const ImageArea = styled.div`
  position: relative;
  flex: 1 1 70%;
  transform: translateZ(30px);
  overflow: hidden;
`;

const Img = styled(motion.img)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform: translateZ(0);
`;

const Overlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  will-change: transform;
  transform: translateZ(30px);
`;

export { Figure, MobileAlert, Inner, Header, ImageArea, Img, Overlay };
