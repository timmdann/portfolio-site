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

  @media (max-width: 1024px) {
    padding: 50px 60px;
    font-size: 1.3rem;
    margin: 0 6%;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 18px;
    padding: 40px 30px;
    margin: 0 4%;
    font-size: 1.2rem;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 32px 20px;
    margin: 0 2%;
    font-size: 1rem;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const FooterElement = styled.a`
  color: var(--indigo-50);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--indigo-200);
  }

  @media (max-width: 560px) {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export { FooterContainer, LinkContainer, FooterElement };
