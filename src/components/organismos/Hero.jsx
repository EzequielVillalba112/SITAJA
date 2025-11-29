import styled from "styled-components";
import BgHero from "../../assets/hero.png";
import { ImgContainer } from "../atomos/Img";
import { Btn } from "../moleculas/Btn";

export const Hero = () => {
  return (
    <HeroContainer id="Hero">
      <ImgContainer src={BgHero} width="100%" height="500px" />
      <div className="glass"></div>
      <TitleHero>
        Defendiendo los derechos <br /> de los tareferos
      </TitleHero>
      <BtnContainer>
        <Btn text={"Contactanos"} url="#Contact" />
      </BtnContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 2rem;

  .glass {
    position: absolute;
    width: 100%;
    height: 500px;
    background: rgba(0, 0, 0, 0.726);
    z-index: 1;
    border-radius: 16px;
  }
`;

const TitleHero = styled.h2`
  z-index: 2;
  color: #ffffff;
  position: absolute;
  text-align: left;
  font-size: 3.5rem;
  left: 20px;
  top: 40px;
  font-family: "MuseoModerno", sans-serif;
  font-weight: 700;
  font-variation-settings: "wdth" 75;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    left: 20px;
  }
`;

const BtnContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 40px;
  left: 20px;
`;
