import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal.tsx";
import Button from "./Button.tsx";

export const ContactSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="w-full space-y-10">
          <h3 className="text-2xl font-semibold text-center">Contact Information</h3>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <ContactInfoRow icon={<Mail className="h-6 w-6 text-primary" />}>
                <a
                  href="mailto:dtimofeev04@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dtimofeev04@gmail.com
                </a>
              </ContactInfoRow>

              <ContactInfoRow icon={<Phone className="h-6 w-6 text-primary" />}>
                <a
                  href="tel:+48731821932"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +48 731 821 932
                </a>
              </ContactInfoRow>

              <ContactInfoRow icon={<MapPin className="h-6 w-6 text-primary" />}>
                <span className="text-muted-foreground">Cracow, Poland</span>
              </ContactInfoRow>
            </div>

            <div className="flex flex-col items-start gap-6 md:pl-8">
              <div>
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/timmdann/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com/timmdann"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="hover:text-primary transition-colors"
                  >
                    <Github />
                  </a>
                </div>
              </div>
              <Button onClick={() => setOpen(true)}>Contact me</Button>
            </div>
          </div>

          <ContactModal open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </section>
  );
};

function ContactInfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-start items-center space-x-4">
      <div className="p-3 rounded-full bg-primary/10">{icon}</div>
      <div>{children}</div>
    </div>
  );
}
