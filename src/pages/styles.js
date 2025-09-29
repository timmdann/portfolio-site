import styled from "styled-components";
import TextType from "../components/text/TypeText";

const HomePage = styled.div`
  margin-bottom: 100px;
`;

const TextShadow = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
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
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
`;

const Name = styled.h1`
  margin: 1px 0 2px;
  line-height: 1.1;
`;

const Role = styled.h2`
  margin: 0;
  font-weight: 500;
  opacity: 0.85;
`;
const Description = styled.h3`
  margin: 0;
  font-weight: 700;
`;

const Page = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding-top: 100px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  opacity: 0.85;
`;

const CardsRow = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const TypingText = styled(TextType)`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  margin: 0 20%;
  min-height: 4lh;
`;

const SkillsContainer = styled.div`
  padding-top: 200px;
  margin-bottom: 200px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;

const CardTitleRow = styled.span`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CardTitlContainer = styled.div`
  display: flex;
  flex-flow: row;
  gap: 20px;
`;

const CardSubtitle = styled.h3`
  text-align: center;
`;
export {
  HomePage,
  TextShadow,
  HomeContainer,
  Name,
  Role,
  Description,
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
