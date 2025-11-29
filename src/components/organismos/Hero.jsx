import styled from "styled-components";
import BgHero from "../../assets/hero.png";
import { ImgContainer } from "../atomos/Img";
import { Btn } from "../moleculas/Btn";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <HeroContainer
      id="Hero"
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ width: "100%", height: "500px" }}
      >
        <ImgContainer src={BgHero} width="100%" height="500px" />
      </motion.div>

      {/* Glass Overlay */}
      <motion.div
        className="glass"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      />

      {/* Título */}
      <TitleHero
        as={motion.h2}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Defendiendo los derechos <br /> de los tareferos
      </TitleHero>

      {/* Botón */}
      <BtnContainer
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        viewport={{ once: true }}
      >
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
    background: rgba(0, 0, 0, 0.72);
    z-index: 1;
    border-radius: 16px;
    backdrop-filter: blur(2px);
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
