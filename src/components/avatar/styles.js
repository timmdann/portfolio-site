import styled from "styled-components";

const Avatar = styled.div`
  position: relative;
  width: 180px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--mist-50);
  box-shadow: 0 18px 40px rgba(var(--grey-900-rgb), 0.85);
  margin-top: 100px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 240px;
    margin-top: 150px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    width: 280px;
    margin-top: 200px;
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: translateZ(0);
`;

export { Avatar, Img };
