import styled from "styled-components";

const BarWrap = styled.div`
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: min(92vw, 640px);

  @media (max-width: 768px) {
    width: 95vw;
    top: 8px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid;
  border-radius: 30px;
  padding: 15px 20px;
  width: 100%;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 10px 14px;
    border-radius: 20px;
  }

  div span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const NavElement = styled.li`
  color: var(--indigo-50);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--indigo-300);
  }
`;

export { BarWrap, Nav, NavList, NavElement };
