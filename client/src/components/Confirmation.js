import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const moment = require("moment");

const Confirmation = () => {
  return (
    <Wrapper>
      <Logos>
        <Logo1
          src={require("../assets/ThankYou.jpg")}
          alt="WearTek"
          height="200px"
        ></Logo1>
        <Logo1
          src={require("../assets/Wearteklogo.png")}
          alt="WearTek"
          height="200px"
        ></Logo1>
      </Logos>
      <Main>Thank you for your order!</Main>
      <Processing>
        We are processing your order now, here are the details:
      </Processing>

      <Divider />

      <ConfirmationWrapper>
        <Details>Confirmation will be sent to</Details>
        <Details2>email@email.com</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Order number</Details>
        <Details2>Order number here</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Order date </Details>
        <Details2>{moment().format("LL")}</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Delivery details</Details>
        <Details2>
          <div>Client address here</div>
          <div>
            Expected delivery date: {moment().add(7, "days").format("LL")}
          </div>
        </Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Summary</Details>
        <Details2>Order summary here</Details2>
      </ConfirmationWrapper>
    </Wrapper>
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
  border-color: gray;
  height: 800px;
`;

const Main = styled.div`
  font-size: 40px;
  margin-bottom: 50px;
`;

const Processing = styled.div`
  margin-bottom: 50px;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  height: 2px;
  background-color: ${COLORS.fourth};
  margin-bottom: 50px;
`;

const ConfirmationWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  width: 800px;
`;

const Details = styled.div`
  display: flex;
  width: 400px;
  font-weight: bold;
  justify-content: flex-end;
  padding-right: 40px;
`;

const Details2 = styled.div``;
const Logo1 = styled.img``;
const Logos = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export default Confirmation;
