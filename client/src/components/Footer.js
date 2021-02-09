import React from "react";

import { COLORS } from "../constants";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Logo
          src={require("../assets/wearteklogo.png")}
          alt="WearTek"
          height="100px"
        ></Logo>
        <div>
          <p>© 2021 - Ellie, Rebecca, Sandra, Boris and their affiliates.</p>
        </div>
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
`;

export default Footer;
