import React, { useState } from "react";

import styled from "styled-components";
import { FaBiking } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";



import {Link}  from 'react-scroll';

const Navbar1 = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: ${({ active }) => (active ? "black" : "rgba(0, 0, 0, 0.4)")};
  /* font-family: "Poppins", sans-serif; */
`;

const NavbarContainer = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NavbarIcon = styled.div`
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 900;
  padding-left: 10px;
  & > :first-child {
    transform: rotate(270deg);
  }
`;

const NavbarItems = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 968px) {
    transition: 0.9s ease-in;
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 50px;
    left: ${({ active }) => (active ? 0 : "-110%")};
    flex-direction: column;
    background-color: black;
  }
`;

const NavbarItem = styled.li`
  height: 100%;
  padding: 0rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  &:hover {
    border-bottom: 3px solid #7ab9cc;
    transition: 0.1s ease-in;
  }

  @media screen and (max-width: 968px) {
    width: 100%;
    height: 90px;

    &:hover {
      background: #383636;
    }
  }
`;

const NavberItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const IcomHamburger = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: flex;
    color: white;
    font-size: 2rem;
    padding-right: 10px;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Navbar1 active={active}>
      <NavbarContainer>
        <NavbarIcon>
          <FaBiking />
          <p>ike</p>
        </NavbarIcon>

        <IcomHamburger onClick={handleActive}>
          {active ? <FaRegWindowClose /> : <FaBuffer />}
        </IcomHamburger>
        <NavbarItems active={active}>
          <NavbarItem>
            <NavberItemLink to="inicio" smooth={true}>Inicio</NavberItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavberItemLink to="historias" smooth={true}>Historias</NavberItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavberItemLink to="servicios" smooth={true}>Servicios</NavberItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavberItemLink to="contacto" smooth={true}>Contacto</NavberItemLink>
          </NavbarItem>
        </NavbarItems>
      </NavbarContainer>
    </Navbar1>
  );
};

export default Navbar;
