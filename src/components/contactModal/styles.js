import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`from{opacity:0}to{opacity:1}`;
const fadeOut = keyframes`from{opacity:1}to{opacity:0}`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(var(--grey-900-rgb), 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  z-index: 9999;

  animation: ${fadeIn} 0.18s ease both;
  ${({ $closing }) =>
    $closing &&
    css`
      animation: ${fadeOut} 0.16s ease both;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const Dialog = styled.div`
  width: min(640px, 92vw);
  border-radius: 20px;
  padding: 24px;
  background: linear-gradient(
    180deg,
    rgb(var(--indigo-900-rgb, 25 24 59) / 0.72),
    rgb(var(--indigo-900-rgb, 25 24 59) / 0.58)
  );
  border: 1px solid rgba(var(--grey-900-rgb), 0.08);
  box-shadow: 0 24px 60px rgba(var(--grey-900-rgb), 0.45);
  color: var(--mist-50);

  @media (max-width: 768px) {
    padding: 18px;
    border-radius: 18px;
  }
  @media (max-width: 560px) {
    padding: 16px;
    border-radius: 16px;
  }
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
`;
const Sub = styled.p`
  margin: 0 0 14px;
  opacity: 0.8;
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: grid;
  gap: 14px;

  @media (max-width: 560px) {
    gap: 10px;
  }
`;

const Row = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-size: 0.85rem;
  opacity: 0.85;
  display: block;
  margin-bottom: 6px;
`;

const controlCss = `
  width: 100%;
  height: 44px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(var(--grey-900-rgb), 0.15);
  background: rgba(var(--grey-900-rgb), 0.45);
  color: var(--mist-50);
  outline: none;
  transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
  font-size: 16px; /* iOS anti-zoom */
  ::placeholder { color: rgba(var(--grey-900-rgb), 0.55); }
  &:focus {
    border-color: var(--slate-300);
    background: rgba(var(--grey-900-rgb), 0.8);
    box-shadow: 0 0 0 3px rgba(var(--indigo-800-rgb), 0.25); /* мягкий focus ring */
  }
`;
const Input = styled.input`
  ${controlCss}
`;

const Textarea = styled.textarea`
  ${controlCss};
  height: auto;
  min-height: 140px;
  resize: vertical;
  line-height: 1.4;

  @media (max-width: 560px) {
    min-height: 120px;
  }
`;

const Actions = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 560px) {
    flex-direction: column-reverse;
    align-items: stretch;
    justify-content: center;
    gap: 8px;

    & > * {
      width: 100%;
      min-height: 44px;
    }
  }
`;

const ErrorText = styled.div`
  color: var(--red-100);
  font-size: 0.85rem;
  margin-top: -4px;
  word-break: break-word;
`;

export {
  Backdrop,
  Dialog,
  Title,
  Sub,
  Form,
  Row,
  Label,
  Input,
  Textarea,
  Actions,
  ErrorText,
};
