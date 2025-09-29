import styled from "styled-components";
import TextType from "../components/text/TypeText";

const HomePage = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0;
  display: grid;
  justify-items: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 72px;
  }
  @media (max-width: 480px) {
    margin-bottom: 56px;
  }
`;

const TextShadow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 14px;
  z-index: 0;

  --glow-color: rgb(var(--indigo-900-rgb, 25 24 59) / 0.8);
  --glow-soft: rgb(var(--indigo-900-rgb, 25 24 59) / 0.35);
  --glow-size: 240%;
  --glow-blur: 28px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--glow-size);
    height: var(--glow-size);
    transform: translate(-50%, -50%);
    background: radial-gradient(
      closest-side,
      var(--glow-color) 0%,
      var(--glow-soft) 45%,
      transparent 80%
    );
    filter: blur(var(--glow-blur));
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 560px) {
    --glow-size: 180%;
    --glow-blur: 20px;
  }
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 16px;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
    padding: 0 12px;
  }
  @media (max-width: 480px) {
    gap: 6px;
    padding: 0 10px;
  }
`;

const Heading = styled.h1`
  margin: 1px 0 2px;
  line-height: 1.1;

  &.role {
    font-weight: 500;
    opacity: 0.85;
  }

  &.description {
    font-weight: 700;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin: 1px 0 2px;
    line-height: 1.1;
  }

  @media (max-width: 480px) {
    line-height: 1.08;
    letter-spacing: 0.01em;
  }
`;

const Page = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding-top: 100px;

  @media (max-width: 768px) {
    gap: 44px;
    padding-top: 88px;
  }
  @media (max-width: 480px) {
    gap: 36px;
    padding-top: 80px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  opacity: 0.85;

  @media (max-width: 480px) {
    letter-spacing: 0.01em;
  }
`;

const CardsRow = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    gap: 32px;
  }
  @media (max-width: 768px) {
    gap: 24px;
  }
  @media (max-width: 480px) {
    gap: 18px;
  }
`;

const TypingText = styled(TextType)`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  margin: 0 20%;
  min-height: 4lh;

  @media (max-width: 1024px) {
    margin: 0 14%;
  }
  @media (max-width: 768px) {
    margin: 0 10%;
    font-size: 1.6rem;
    min-height: 3.6lh;
  }
  @media (max-width: 560px) {
    margin: 0 8%;
  }
  @media (max-width: 480px) {
    margin: 0 6%;
    font-size: 1.4rem;
    min-height: 3.4lh;
  }
  @media (max-width: 360px) {
    margin: 0 4%;
    font-size: 1.3rem;
    min-height: 3.2lh;
  }
`;

const SkillsContainer = styled.div`
  padding-top: 200px;
  margin-bottom: 200px;

  @media (max-width: 1024px) {
    padding-top: 160px;
    margin-bottom: 160px;
  }
  @media (max-width: 768px) {
    padding-top: 120px;
    margin-bottom: 120px;
  }
  @media (max-width: 560px) {
    padding-top: 100px;
    margin-bottom: 100px;
  }
  @media (max-width: 480px) {
    padding-top: 96px;
    margin-bottom: 96px;
  }

  .custom-spotlight-card > div > div {
    @media (max-width: 768px) {
      height: 160px !important;
    }
    @media (max-width: 560px) {
      height: 140px !important;
    }
    @media (max-width: 400px) {
      height: 120px !important;
    }
  }
`;

const CardTitle = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;

const CardTitleRow = styled.span`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const CardTitlContainer = styled.div`
  display: flex;
  flex-flow: row;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CardSubtitle = styled.h3`
  text-align: center;

  @media (max-width: 480px) {
    line-height: 1.25;
  }
`;

export {
  HomePage,
  TextShadow,
  HomeContainer,
  Heading,
  Page,
  Title,
  CardsRow,
  TypingText,
  SkillsContainer,
  CardTitle,
  CardTitleRow,
  CardTitlContainer,
  CardSubtitle,
};
