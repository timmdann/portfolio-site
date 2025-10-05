const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-1000 top-2 w-[95vw] md:top-3 md:w-[min(92vw,640px)]">
      <div
        className="flex items-center justify-between
         w-full border-[0.1rem] border-border rounded-[30px]
         py-[15px] px-[20px]
         backdrop-blur-[5px]
         max-[768px]:py-[10px] max-[768px]:px-[14px] max-[768px]:rounded-[20px]
         max-[480px]:justify-center"
      >
        <a className="text-xl font-bold flex items-center" href="#hero">
          <span className="relative z-10">timmdann</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
