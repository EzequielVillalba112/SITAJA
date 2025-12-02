import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <ContactWrapper
      id="Contact"
      as={motion.section}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Title>Contacto</Title>

      <ContactList>
        <ContactItem
          as={motion.div}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Icon>
            <FaMapMarkerAlt />
          </Icon>
          <Text>
            Calle Paraguay y Av. 9 de Julio – Ciudad de Jardín América -
            Misiones
          </Text>
          <br/>
          <Text>
            <Bold>Domicilio legal:</Bold> Calle Atuel S/N Barrio Capilla Dos - Ciudad de
            Jardín América - Misiones.
          </Text>
        </ContactItem>

        <ContactItem
          as={motion.div}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Icon>
            <FaPhoneAlt />
          </Icon>
          <div>
            <Text>
              <Bold>Secretaría General:</Bold> 3743 554419
            </Text>
            <Text>
              <Bold>Depto. Jurídico y Contable:</Bold> 3743 452814
            </Text>
          </div>
        </ContactItem>

        <ContactItem
          as={motion.div}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Icon>
            <FaEnvelope />
          </Icon>
          <Text>sindicatodetareferos@yahoo.com.ar</Text>
        </ContactItem>
      </ContactList>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  background: #ffffff;
  width: 100%;
  padding: 40px 20px;
  border-radius: 14px;
  margin: 0 auto 50px auto;
  border: 2px solid #3a2716;
  margin-top: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #355e3b;
  font-weight: 700;
  font-family: "MuseoModerno", sans-serif;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 18px 20px;
  border-radius: 12px;
  border: 1px solid #e3d7c2;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    border-style: none;
    box-shadow: none;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #6e8f3a;
  margin-right: 15px;
  margin-top: 4px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1.4rem;
  font-family: "MuseoModerno", sans-serif;
  color: #2a2a2a;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;
