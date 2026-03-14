import Avatar from "./Avatar.tsx";
import Button from "./Button.tsx";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <Avatar />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Daniil</span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">Tymofieiev</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Fullstack Developer & Blockchain Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Building modern web apps and distributed systems. Passionate about Web3
            and decentralized technologies — from frontend to blockchain infrastructure.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <Button href="#projects">View My Work</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
