import { Navbar } from "../components/Navbar.tsx";
import { ThemeToggle } from "../components/ThemeToggle.tsx";
import { HeroSection } from "../components/HeroSection.tsx";
import { AboutSection } from "../components/AboutSection.tsx";
import { SkillsSection } from "../components/SkillsSection.tsx";
import { ProjectsSection } from "../components/ProjectsSection.tsx";
import { ContactSection } from "../components/ContactSection.tsx";
import { Footer } from "../components/Footer.tsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
