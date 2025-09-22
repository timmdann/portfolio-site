import { useState } from "react";
import Photo from "../components/avatar/Photo";
import Button from "../components/button/Button";
import ShinyText from "../components/text/ShinyText";
import ContactModal from "../components/contactModal/ContactModal";

import {
  HomePage,
  TextShadow,
  HomeContainer,
  Name,
  Role,
  Description,
} from "./styles";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <HomePage>
      <HomeContainer>
        <Photo />
        <TextShadow>
          <Name>
            <ShinyText
              text="Daniil Tymofieiev"
              disabled={false}
              speed={5}
              className="custom-class"
            />
          </Name>

          <Role>
            <ShinyText
              text="Front-end Developer"
              disabled={false}
              speed={5}
              className="custom-class"
            />
          </Role>
          <Description>
            <ShinyText
              text="Turning concepts into interactive and production-ready web experiences"
              disabled={false}
              speed={5}
              className="custom-class"
            />
          </Description>
          <Button onClick={() => setOpen(true)}>Contact me</Button>
          <ContactModal open={open} onClose={() => setOpen(false)} />
        </TextShadow>
      </HomeContainer>
    </HomePage>
  );
}

export default Home;
