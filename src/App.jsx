import styled from "styled-components";
import Prism from "./components/background/Prism";
import NavBar from "./components/navbar/NavBar";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";

const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const DarkGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #171625 0%, #192746 100%);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function App() {
  return (
    <>
      <PageBackground aria-hidden>
        <DarkGradient />
        <Prism
          animationType="rotate"
          timeScale={0.4}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
          suspendWhenOffscreen={false}
        />
      </PageBackground>

      <Content>
        <NavBar />
        <MainContent>
          <section id="home">
            <Home />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contacts">
            <Footer />
          </section>
        </MainContent>
      </Content>
    </>
  );
}

export default App;
