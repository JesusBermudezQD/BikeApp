import React, { useState } from "react";

import styled from "styled-components";
import { SliderData } from "./SliderData";

import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const SliderContentImg = styled.div`
  width: auto;
  height: 400px;
  display: flex;
  background: rgb(0, 0, 0, 0.7);

  @media screen and (max-width: 968px) {
    max-width: 400px;
    max-height: 280px;
  }
`;
const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s;
  object-fit: contain;

  @media screen and (max-width: 968px) {
    width: 87.5%;
    height: 280px;
  }
  @media screen and (max-width: 450px) {
    width: 86%;
  }
`;

const SliderContentText = styled.div`
  width: 90%;
  position: absolute;
  text-align: left;
  color: white;
  transition: all 0.3s;
  bottom: 0px;
  opacity: 0;

  &:hover {
    transform: scale(1);
    opacity: 1;
  }

  @media screen and (max-width: 968px) {
    width: 39%;
  }
  @media screen and (max-width: 450px) {
    width: 79%;
  }
`;

const SliderText = styled.div`
  background: rgb(0, 0, 0, 0.7);
  color: white;
  padding: 15px;

  & > span {
    font-size: 2em;
    font-weight: 800;
  }

  & > p {
    padding-top: 10px;
    font-weight: 500;
  }

  @media screen and (max-width: 968px) {
    & > p {
      margin-top: 10px;
      font-weight: 00;
      font-size: 15px;
    }
    & > span {
      font-size: 1em;
      font-weight: 800;
    }
  }
`;

const DivButton = styled.div`
  background: rgb(0, 0, 0, 0.4);
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: rgb(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 968px) {
    font-size: 25px;
  }
`;

const SliderC = () => {
  const [pos, setPos] = useState(0);
  const handleLeft = () => {
    if (pos <= 0) {
      setPos(SliderData.length - 1);
    } else {
      setPos(pos - 1);
    }
  };
  const handleRight = () => {
    if (pos === SliderData.length - 1) {
      setPos(0);
    } else {
      setPos(pos + 1);
    }
  };

  console.log(pos);
  return (
    <SliderContent>
      <SliderContentImg>
        <DivButton onClick={handleLeft}>
          <FaAngleLeft />
        </DivButton>
        <SliderImg src={SliderData[pos].image} alt="" />
        <DivButton onClick={handleRight}>
          <FaAngleRight />
        </DivButton>
      </SliderContentImg>

      <SliderContentText>
        <SliderText>
          <span>{SliderData[pos].name}</span>
          <p>{SliderData[pos].data}</p>
        </SliderText>
      </SliderContentText>
    </SliderContent>
  );
};

export default SliderC;
