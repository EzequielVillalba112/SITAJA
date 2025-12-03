import styled from "styled-components";
import { ImgContainer } from "../atomos/Img";
import BgAbout from "../../assets/about.jpg";
import { Title } from "../atomos/Title";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <AboutContainer
      id="About"
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Title>Compromiso con el Trabajo Tarefero</Title>
      </motion.div>

      {/* SUBTITLE */}
      <SubtitleAbout
        as={motion.h3}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        14 años resolviendo situaciones <br /> laborales y acompañando a quienes
        sostienen la cosecha misionera.
      </SubtitleAbout>

      {/* CONTENEDOR DE TEXTO + IMG */}
      <ContainerDataAbout>
        {/* TEXTO */}
        <motion.div
          className="text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            A lo largo de este tiempo hemos construido un espacio de
            organización, apoyo mutuo y representación real, que nace de las
            necesidades de quienes todos los días sostienen la cosecha y el
            trabajo rural en nuestra provincia.
          </p>

          <p>
            Nuestro compromiso es estar presentes en cada reclamo, cada trámite
            y cada lucha colectiva. Brindamos asesoramiento, y
            acompañamiento frente a situaciones de explotación, falta de pago,
            irregularidades laborales y cualquier vulneración de derechos.
          </p>
        </motion.div>

        {/* IMAGEN */}
        {/* <motion.div
          className="img-container"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ImgContainer src={BgAbout} width="100%" alt="About us" />
        </motion.div> */}
      </ContainerDataAbout>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  border-radius: 16px;
  background-color: #355934;
  padding: 20px;
`;

const SubtitleAbout = styled.h3`
  color: #d4d4d4;
  font-family: "MuseoModerno", sans-serif;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: left;
  font-size: 1.2rem;
  margin-top: 10px;
  margin-left: 10px;
`;

const ContainerDataAbout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;

  .text {
    width: 50%;
    margin-top: 20px;
    color: #eeeeee;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .img-container {
    margin-top: 20px;
    border-radius: 16px;
    overflow: hidden;
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .text,
    .img-container {
      width: 100%;
    }
  }
`;
