import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
// import { cn } from "../lib/utils";
// import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import ContactModal from "./ContactModal";
import Button from "./Button";

export const ContactSection = () => {
  // const { toast } = useToast();
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
          <h3 className="text-2xl font-semibold text-center">
            Contact Information
          </h3>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex flex-row justify-start items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground">
                    dtimofeev04@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground">+48731821932</span>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground">Cracow, Poland</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:pl-8">
              <div>
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/timmdann/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com/timmdann"
                    target="_blank"
                    rel="noreferrer"
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
