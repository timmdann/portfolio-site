import { ArrowDown } from "lucide-react";
import Avatar from "./Avatar";
import ShinyText from "./ShinyText";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <Avatar />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">
              <ShinyText
                text="Daniil"
                disabled={false}
                speed={5}
                className="custom-class"
              />
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              <ShinyText
                text="Tymofieiev"
                disabled={false}
                speed={5}
                className="custom-class"
              />
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Front-end Developer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
