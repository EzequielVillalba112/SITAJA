import styled from "styled-components";
import { Title } from "../atomos/Title";
import { servicios } from "../../utils/Items-services";

export const Services = () => {
 
  return (
    <ServicesContainer id="Services">
      <Title>Servicios</Title>
      <ServicesGrid>
        {servicios.map((s, i) => (
          <div key={i} className="servicio-card">
            <div className="servicio-icon">{s.icon}</div>
            <h3>{s.titulo}</h3>
            <p>{s.desc}</p>
          </div>
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
    border: 1px solid #e2d5c3; /* borde suave */
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.08);
    transition: all 0.25s ease;
  }

  .servicio-icon {
    font-size: 2.8rem;
    color: #6e8f3a; /* verde yerba */
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
