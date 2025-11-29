import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <ContainerFooter>
      <h3>© 2026 SITAJA. Todos los derechos reservados.</h3>
      <SocialContainer>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </SocialContainer>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #ffffff;
    font-family: "MuseoModerno", sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h3{
      font-size: 1.1rem;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 2rem;
    color: #ffffff;
    transition: color 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.8s;

    svg {
      width: 60px;
      height: 60px;
    }

    &:hover {
      background-color: #e27100;

      color: #355934;
    }
  }
`;
