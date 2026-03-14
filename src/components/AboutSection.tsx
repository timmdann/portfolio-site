import { Code2, Layers, ShieldCheck } from "lucide-react";
import Button from "./Button.tsx";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Fullstack Developer & Blockchain Engineer</h3>
            <p className="text-muted-foreground">
              Computer Science graduate from Cracow University of Technology, currently pursuing a
              Master's in Cybersecurity. I bring hands-on experience in both blockchain engineering
              and fullstack development — from building modern web apps to working on distributed
              systems and blockchain infrastructure.
            </p>
            <p className="text-muted-foreground">
              Passionate about Web3 and decentralized technologies, I'm always exploring what's
              next in the space. I thrive at the intersection of robust backend systems and
              polished, performant frontends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button href="#contact">Get In Touch</Button>
              <Button href="/Tymofieiev_Daniil_CV.pdf" download>
                Download CV
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Layers className="h-6 w-6 text-primary" />,
                title: "Fullstack Development",
                description:
                  "End-to-end web applications with React, Next.js, Node.js, Nest.js and modern databases — from UI to API to infrastructure.",
              },
              {
                icon: <Code2 className="h-6 w-6 text-primary" />,
                title: "Blockchain & Web3",
                description:
                  "Building decentralized applications and distributed systems. Passionate about the Web3 ecosystem and what comes next.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-primary" />,
                title: "Cybersecurity",
                description:
                  "Pursuing a Master's in Cybersecurity — applying security-first thinking to system design and engineering decisions.",
              },
            ].map(({ icon, title, description }) => (
              <div key={title} className="gradient-border p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
