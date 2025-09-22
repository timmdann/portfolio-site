import styled from "styled-components";

const FooterContainer = styled.div`
  font-size: 1.5rem;
  background: var(--g-multi-dark);
  color: var(--mist-50);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70px 100px;
  margin: 0 10%;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FooterElement = styled.a`
  color: var(--indigo-50);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--indigo-200);
  }
`;

export { FooterContainer, LinkContainer, FooterElement };
