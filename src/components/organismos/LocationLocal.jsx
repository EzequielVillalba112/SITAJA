import styled from "styled-components";
import { Title } from "../atomos/Title";
import { motion } from "framer-motion";

export const LocationLocal = () => {
  return (
    <LocationContainer
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>Nos encontramos</Title>
      </motion.div>

      {/* Mapa */}
      <MapContainer
        as={motion.div}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.4093833629339!2d-55.226781211143894!3d-27.04161729859474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8112abe7afac1%3A0x5b01f049350e120!2sAvenida%209%20de%20Julio%20%26%20Paraguay%2C%20N3328%20Jard%C3%ADn%20America%2C%20Misiones!5e0!3m2!1ses!2sar!4v1764387385910!5m2!1ses!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </LocationContainer>
  );
};

const LocationContainer = styled.section`
  width: 100%;
  padding: 20px;
  margin-top: 2rem;
  border-radius: 16px;
  background-color: #355934;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 15px;

  iframe {
    width: 100%;
    height: 450px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    iframe {
      height: 300px;
    }
  }
`;
