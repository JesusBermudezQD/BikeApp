import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Form from "../components/Form";
import SliderC from "../components/slider/SliderC";

import bike from "../img/bike4.jpg";

import { FaExclamationCircle } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";


const Home = () => {
  const Header = styled.div`
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4) url(${bike}) no-repeat center center fixed;
    background-size: cover;
    background-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Header_text = styled.div`
    text-align: center;
    /* font-family: "Poppins", sans-serif; */
    overflow: hidden;
    width: 90%;

    color: white;

    & :nth-child(1) {
      font-size: 5rem;
    }
    & :nth-child(2) {
      font-size: 3rem;
    }

    @media screen and (max-width: 968px) {
      & :nth-child(1) {
        font-size: 3rem;
      }
      & :nth-child(2) {
        font-size: 1rem;
      }

      & :nth-child(3) {
        font-size: 1rem;
      }
    }
  `;

  const Button = styled.button`
    padding: 5px 25px;
    /* background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")}; */

    background: transparent;
    color: white;
    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #7ab9cc;
    border-radius: 3px;
    cursor: pointer;
  `;

  const Button_1 = styled(Button)`
    &:hover {
      background: #7ab9cc;
    }
  `;

  const Seccion = styled.div`
    height: auto;
    display: flex;
    font-family: "Poppins", sans-serif;
  `;

  const Section_1 = styled(Seccion)`
    flex-direction: column;
    align-items: center;
    /* background: #afb4b5; */

    & > h1 {
      margin-top: 70px;
      margin-bottom: 50px;
    }
  `;

  const Section_1_cards = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 30px;

    flex-wrap: wrap;
    gap: 30px;
  `;

  const Section_1_card = styled.div`
    width: 280px;
    height: auto;
    box-shadow: 0px -3px 24px 0px rgba(0, 0, 0, 0.38);
  `;

  const Section_1_card_content = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
  `;

  const Card_icon = styled.div`
    margin: auto;
    padding: 20px;
    font-size: 60px;
    color: #7ab9cc;
  `;

  const Card_text = styled.div`
    padding: 10px;

    & > span {
      font-size: 25px;
      font-weight: bolder;
    }

    & > p {
      padding-top: 10px;
      text-align: justify;
    }
  `;

  const Section_1_history = styled.div`
    width: 100%;
  `;

  const Section_2 = styled(Seccion)`
    align-items: center;
    background: #afb4b5;
    flex-direction: column;
  
    & > h1 {
      margin-top: 70px;
      margin-bottom: 20px;
    }
  `;
  return (
    <>
      <Navbar />
      <Header  id="inicio">
        <Header_text>
          <h1>¡DISFRUTA EN FAMILIA!</h1>
          <h3>SOBRE RUEDAS</h3>
          <Button_1>Vamos</Button_1>
        </Header_text>
      </Header>

      <Section_1 id="historias">
        <h1>HISTORIAS</h1>
        <Section_1_history>
          <SliderC />
        </Section_1_history>

        <h1 id="servicios">SERVICIOS</h1>
        <Section_1_cards>
          <Section_1_card>
            <Section_1_card_content>
              <Card_icon>
                <FaExclamationCircle />
              </Card_icon>
              <Card_text>
                <span>Informacion</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  ut nihil facere dolore. Natus provident, magnam recusandae
                  dicta ipsa odit corporis exercitationem amet numquam,
                  possimus, a hic adipisci? Labore, facilis?
                </p>
              </Card_text>
            </Section_1_card_content>
          </Section_1_card>
          <Section_1_card>
            <Section_1_card_content>
              <Card_icon>
                <FaMoneyBillWave />
              </Card_icon>
              <Card_text>
                <span>Medios de pago</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  ut nihil facere dolore. Natus provident, magnam recusandae
                  dicta ipsa odit corporis exercitationem amet numquam,
                  possimus, a hic adipisci? Labore, facilis?
                </p>
              </Card_text>
            </Section_1_card_content>
          </Section_1_card>
          <Section_1_card>
            <Section_1_card_content>
              <Card_icon>
                <FaRegCalendarAlt />
              </Card_icon>
              <Card_text>
                <span>Agenda</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  ut nihil facere dolore. Natus provident, magnam recusandae
                  dicta ipsa odit corporis exercitationem amet numquam,
                  possimus, a hic adipisci? Labore, facilis?
                </p>
              </Card_text>
            </Section_1_card_content>
          </Section_1_card>
        </Section_1_cards>
      </Section_1>

      <Section_2>
        <h1 id="contacto">CONTACTO</h1>
        <Form />
      </Section_2>
    </>
  );
};

export default Home;
