import { FooterContainer, LinkContainer, FooterElement } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; timmdann 2025</p>
      <LinkContainer>
        <FooterElement
          href="https://www.linkedin.com/in/timmdann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterElement>
        <FooterElement
          href="https://github.com/timmdann"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterElement>
      </LinkContainer>
    </FooterContainer>
  );
}

export default Footer;
