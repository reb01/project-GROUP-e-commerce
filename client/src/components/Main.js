import React, { useState, useEffect } from "react";

import { COLORS } from "../constants";
import styled from "styled-components";
// import GlobalStyles from "../GlobalStyles";

const Main = () => {
  const height = "200px";
  const width = "200px";
  return (
    <>
      <Wrapper
        style={{
          backgroundImage: "url(" + require("../assets/background.jpg") + ")",
        }}
      >
        <Carousel>
          <Slide>
            <ImgTxt>Fitness</ImgTxt>
            <Image src={require("../assets/fitness.jpg")}></Image>
          </Slide>
          <Slide>
            <ImgTxt>Medical</ImgTxt>
            <Image src={require("../assets/Medical.jpg")}></Image>
          </Slide>
          <Slide>
            <ImgTxt>Lifestyle</ImgTxt>
            <Image src={require("../assets/Lifestyle.jpg")}></Image>
          </Slide>

          <Slide>
            <ImgTxt>Entertainment</ImgTxt>
            <Image src={require("../assets/Entertainment.jpg")}></Image>
          </Slide>
          <Slide>
            <ImgTxt>Industrial</ImgTxt>
            <Image src={require("../assets/industrial.jpg")}></Image>
          </Slide>
        </Carousel>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  background-image: "../assets/industrial.jpg";
  height: 74vh;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  border-radius: 1000px;
  height: 250px;
  width: 250px;
`;

const ImgTxt = styled.h3`
  position: absolute;
  color: white;
  font-size: 25pt;
  cursor: pointer;
  transition: font-size 0.5s ease-out;
  &:active,
  :focus,
  :hover {
    font-size: 28pt;
    transition-timing-function: ease-in-out;
    transition-property: font-size;
  }
`;

const Slide = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.secondary};
  height: 400px;
  width: 300px;
  border-style: solid;
  border-radius: 20px;
  border: 2px;
  padding: 20px;
  margin: 20px;
  margin-top: 75px;
  margin-bottom: 75px;
`;

export default Main;
