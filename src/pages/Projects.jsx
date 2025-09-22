import ShinyText from "../components/text/ShinyText";
import ProjectCard from "../components/projectCard/ProjectCard";
import { Page, Title, CardsRow } from "./styles";

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
          imageSrc="/project-3.png"
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
