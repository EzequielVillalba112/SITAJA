import styled from "styled-components";
import ImgWhatsapp from "../../assets/whatsapp-svg.svg";
import { ImgContainer } from "../atomos/Img";

export const WhatsappBtn = () => {
  const sendWhatsApp = () => {
    const numero = `+543743585057`; // quitamos el espacio para WhatsApp

    const sendMessage = (mensaje) => {
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(url, "_blank");
    };

    const mensajeBase = "Hola, quiero hacer una consulta.";
    sendMessage(mensajeBase);
  };
  return (
    <BtnWhatsapp onClick={() => sendWhatsApp()}>
      <img src={ImgWhatsapp} alt="WhatsApp" width="40px" />
    </BtnWhatsapp>
  );
};

const BtnWhatsapp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    right: 20px;
  }
`;
