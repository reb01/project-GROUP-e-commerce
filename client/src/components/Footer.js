import React from "react";

import { COLORS } from "../constants";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Logo
          src={require("../assets/newwearteklogo.png")}
          alt="WearTek"
          height="98px"
        ></Logo>
        <FooterTextContainer>
          <FooterText>
            © 2021 - Ellie, Rebecca, Sandra, Boris and their affiliates.
          </FooterText>
        </FooterTextContainer>
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
  height: 100px;
`;

const Logo = styled.img`
  display: flex;
  position: absolute;
  top: 0px;
  left: 100px;
  @media (max-width: 800px) {
    left: 10px;
  }
`;

const FooterTextContainer = styled.div`
  display: flex;
  height: 14px;
  flex-wrap: wrap;
  font-family: "Alata", sans-serif;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  position: absolute;
  @media (max-width: 800px) {
    left: 120px;
  }
`;

export default Footer;
