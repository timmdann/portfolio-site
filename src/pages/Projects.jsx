import ShinyText from "../components/text/ShinyText";
import ProjectCard from "../components/projectCard/ProjectCard";
import {
  Page,
  Title,
  CardsRow,
  CardTitle,
  CardTitleRow,
  CardTitlContainer,
  CardSubtitle,
} from "./styles";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

function Projects() {
  return (
    <Page>
      <Title>
        <ShinyText
          text="My projects"
          disabled={false}
          speed={5}
          className="custom-class"
        />
      </Title>
      <CardsRow>
        <ProjectCard
          link="https://qitchen-restaurant-site.vercel.app/"
          imageSrc="/project-3.png"
          altText="Soon..."
          captionText={
            <CardTitle>
              <CardSubtitle>Qitchen — Restaurant</CardSubtitle>
              <CardTitlContainer>
                <CardTitleRow>
                  <FaReact /> React
                </CardTitleRow>
                <CardTitleRow>
                  <SiTypescript /> TypeScript
                </CardTitleRow>
                <CardTitleRow>
                  <RiTailwindCssFill /> TailwindCSS
                </CardTitleRow>
                <CardTitleRow>
                  <SiReactrouter /> React Router
                </CardTitleRow>
              </CardTitlContainer>
            </CardTitle>
          }
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
        <ProjectCard
          imageSrc="/project-2.png"
          altText="Soon..."
          captionText="Soon..."
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
        <ProjectCard
          imageSrc="/project-1.png"
          altText="Soon..."
          captionText="Soon..."
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </CardsRow>
    </Page>
  );
}

export default Projects;
