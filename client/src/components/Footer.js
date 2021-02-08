import React from "react";

import { COLORS } from "../constants";
import styled from "styled-components";

const Footer = () => {

  return (
    <>
      <Wrapper>
        <Logo
          src={require("../Wearteklogo.png")}
          alt="WearTek"
          height="200px"
        ></Logo>
        <p>This is the footer</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.fifth};
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 200px; 
`;

const Logo = styled.img`
  display: flex;
  position: absolute;
  top: 0px;
  left: 100px;
`;

export default Footer;
