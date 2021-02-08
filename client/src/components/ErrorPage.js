import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const ErrorPage = () => {
  return (
    <Wrapper>
      <StyledDiv>
        <Logo
          src={require("../sorrySmiley.png")}
          alt="Sorry"
          height="250px"
        ></Logo>
        <Sorry>SORRY</Sorry>
      </StyledDiv>
      <StyledDiv2>
        <Text>Something went wrong on our end...</Text>
        <Text>
          Please go back and try again or go to{" "}
          <LinkTo to={`/`}>Wear Tek's home page.</LinkTo>
        </Text>
        <Divider />{" "}
        <Logo1
          src={require("../Wearteklogo.png")}
          alt="WearTek"
          height="200px"
        ></Logo1>
      </StyledDiv2>
    </Wrapper>
  );
};

export default ErrorPage;

const Logo1 = styled.img``;

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 2px;
  background-color: ${COLORS.fourth};
  margin-top: 50px;
  margin-bottom: 70px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 800px;
`;
const Text = styled.div`
  font-size: 20px;
  margin-top: 30px;
`;

const LinkTo = styled(Link)`
  /* padding: 20px; */
  color: ${COLORS.secondary};
  text-decoration: none;
  &:hover {
    color: ${COLORS.fourth};
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 50px;
  left: 300px;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const StyledDiv2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top:160px;
`;

const Logo = styled.img`
`;

const Sorry = styled.div`
  font-size: 140px;
  margin-left: 130px;
  font-weight: lighter;
`;
