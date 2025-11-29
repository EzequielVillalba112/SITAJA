import styled from "styled-components";
import { Title } from "../atomos/Title";
import { servicios } from "../../utils/Items-services";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <ServicesContainer
      id="Services"
      as={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Title>Servicios</Title>
      </motion.div>

      {/* Grid animado */}
      <ServicesGrid
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, // efecto escalonado
            },
          },
        }}
      >
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            className="servicio-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="servicio-icon">{s.icon}</div>
            <h3>{s.titulo}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  width: 100%;
  padding: 20px;
  margin-top: 2rem;
  border-radius: 16px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 20px auto;

  .servicio-card {
    background: #ffffff;
    border: 1px solid #e2d5c3;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.08);
    transition: all 0.25s ease;
  }

  .servicio-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  }

  .servicio-icon {
    font-size: 2.8rem;
    color: #6e8f3a;
    margin-bottom: 15px;
  }

  .servicio-card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #2f2f2f;
  }

  .servicio-card p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.4;
  }
`;
