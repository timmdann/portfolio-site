import { useState, useEffect } from "react";
import Photo from "../components/avatar/Photo";
import Button from "../components/button/Button";
import ShinyText from "../components/text/ShinyText";
import ContactModal from "../components/contactModal/ContactModal";

import { HomePage, TextShadow, HomeContainer, Heading } from "./styles";

function Home() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NameTag = isMobile ? "h2" : "h1";
  const RoleTag = isMobile ? "h3" : "h2";
  const DescriptionTag = isMobile ? "p" : "h3";

  return (
    <HomePage>
      <HomeContainer>
        <Photo />
        <TextShadow>
          <Heading as={NameTag}>
            <ShinyText text="Daniil Tymofieiev" disabled={false} speed={5} />
          </Heading>

          <Heading as={RoleTag} className="role">
            <ShinyText text="Front-end Developer" disabled={false} speed={5} />
          </Heading>

          <Heading as={DescriptionTag} className="description">
            <ShinyText
              text="Turning concepts into interactive and production-ready web experiences"
              disabled={false}
              speed={5}
            />
          </Heading>

          <Button onClick={() => setOpen(true)}>Contact me</Button>
          <ContactModal open={open} onClose={() => setOpen(false)} />
        </TextShadow>
      </HomeContainer>
    </HomePage>
  );
}

export default Home;
