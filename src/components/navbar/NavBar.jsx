import { BarWrap, Nav, NavList, NavElement } from "./styles";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <BarWrap>
      <Nav>
        <div>
          <span>timmdann</span>
        </div>
        <NavList>
          <NavElement>
            <a
              href="#home"
              tabIndex={1}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </NavElement>
          <NavElement>
            <a
              href="#skills"
              tabIndex={1}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </NavElement>
          <NavElement>
            <a
              href="#projects"
              tabIndex={1}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </NavElement>
          <NavElement>
            <a
              href="#contacts"
              tabIndex={1}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacts");
              }}
            >
              Contacts
            </a>
          </NavElement>
        </NavList>
      </Nav>
    </BarWrap>
  );
}

export default NavBar;
