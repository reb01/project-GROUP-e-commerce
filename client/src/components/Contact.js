import React, { useEffect } from "react";
import { COLORS } from "../constants";
import Map from "./Map";
import styled from "styled-components";

const location = {
  address: "WEAR TEK, 1814 Blvd. De La Côte-Vertu, Saint-Laurent, QC H4L 2A6",
  lat: 45.51044,
  lng: -73.68686,
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper>
        <Logo
          src={require("../assets/contactBlue.png")}
          alt="contact us"
        ></Logo>
        <BoxWrapper>
          <BoxTextWrapper>
            <Box />
            <TextTitles>Talk to Customer Support</TextTitles>
            <Textparagraph>
              Sometimes you need a little help from your friends. Or a Wear-Tek
              support rep. Don’t worry… we’re here for you to chat 24/7.
            </Textparagraph>
            <EmailPhoneNo>
              <Bold>+1 801-954-9887</Bold>
            </EmailPhoneNo>
          </BoxTextWrapper>
          <BoxTextWrapper>
            <Box />
            <TextTitles>Email Customer Support</TextTitles>
            <Textparagraph>
              You may prefer to email rather than call us. Please rest assured
              that we will get back to you as fast as we can!
            </Textparagraph>
            <EmailPhoneNo>
              <Bold>wearteksupport@weartek.com</Bold>
            </EmailPhoneNo>
          </BoxTextWrapper>
        </BoxWrapper>
        <Map location={location} zoomLevel={17} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  max-height: 1740px;
`;
const Logo = styled.img`
  width: 100vw;
  display: flex;
`;

const BoxTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextTitles = styled.div`
  position: relative;
  top: -280px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`;

const Textparagraph = styled.div`
  position: relative;
  width: 500px;
  top: -290px;
  display: flex;
  font-size: 17px;
  margin: 10px;
  padding: 60px;
  text-align: center;
`;
const BoxWrapper = styled.div`
  /* position: relative;
  top: -10px; */
  display: flex;
  width: 100vw;
  justify-content: center;
`;
const Box = styled.h1`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 300px;
  border: 1px solid lightgray;
  background-color: white;
  margin: 10px;
`;

const EmailPhoneNo = styled.div`
  position: relative;
  width: 500px;
  top: -380px;
  display: flex;
  font-size: 17px;
  margin: 10px;
  padding: 60px;
  color: ${COLORS.secondary};
  justify-content: center;
`;

const Bold = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;

export default Contact;
