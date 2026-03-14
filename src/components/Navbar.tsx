import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { navItems } from "../data/nav.ts";
import { cn } from "../lib/utils.ts";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="fixed left-1/2 -translate-x-1/2 z-[1000] top-2 w-[95vw] md:top-3 md:w-[min(92vw,640px)]">
        <div className="flex items-center justify-between w-full border-[0.1rem] border-border rounded-[30px] py-[15px] px-[20px] backdrop-blur-[5px] max-[768px]:py-[10px] max-[768px]:px-[14px] max-[768px]:rounded-[20px]">
          <a className="text-xl font-bold" href="#hero">
            timmdann
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-1 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className={cn(
            "fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8",
            "bg-background/95 backdrop-blur-sm md:hidden",
            "animate-fade-in"
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:underline"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
