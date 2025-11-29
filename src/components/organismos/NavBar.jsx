import styled from "styled-components";
import { ImgContainer } from "../atomos/Img";
import Logo from "../../assets/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export const NavBar = ({ itemsMenu }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <NavBarContainer>
      <LogoContainer>
        <ImgContainer src={Logo} width="70px" height="70px" />
        <h1>SITAJA</h1>
      </LogoContainer>

      {/* Botón hamburguesa mobile */}
      <MenuButton onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
      </MenuButton>

      {/* Menú principal */}
      <NavItemsMenu open={open}>
        {itemsMenu.map((item, index) => (
          <NavItem key={index} onClick={() => setOpen(false)}>
            <a href={item.link}>{item.label}</a>
          </NavItem>
        ))}
      </NavItemsMenu>
    </NavBarContainer>
  );
};

/* ---- ESTILOS ---- */

const NavBarContainer = styled.nav`
  background-color: #355934;
  padding: 1rem;
  width: 100%;
  border-radius: 16px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

/* Ítems del menú */
const NavItemsMenu = styled.ul`
  list-style: none;
  display: flex;
  transition: all 0.3s ease;
  z-index: 10;
  border-radius: 16px;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    top: 94px;
    right: 0;
    background-color: #355934;
    width: 100%;
    flex-direction: column;
    padding: 20px 0;
    border-radius: 0 0 16px 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 16px;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 1.3rem;
    font-family: "MuseoModerno", sans-serif;
    letter-spacing: 1.5px;
    transition: color 0.3s ease;

    &:hover {
      color: #e27100;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: #ffffff;
    font-family: "MuseoModerno", sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
`;

/* Botón hamburguesa */
const MenuButton = styled.button`
  display: none;
  font-size: 42px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
