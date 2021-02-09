import React from "react";
//added
import { COLORS } from "../constants";
import styled from "styled-components";

const Cart = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>
            <TitleDiv>YOUR CART</TitleDiv>
          </Title>
        </Header>
        <CartWrapper>
          <p>This is the Cart</p>
        </CartWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-style: solid;
  border-width: 1px;
  border-color: gray;
`;
const Header = styled.div`
  display: flex;
  height: 100px;
  background-color: #aad7e0;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23caf0f8' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  font-size: 120%;
  border: 1px solid lightgray;
  justify-content: center;
  width: 100vw;
`;
const CartWrapper = styled.div``;
const TitleDiv = styled.div`
  border: 4px double white;
  padding:15px;
  font-family: 'Oswald', sans-serif;
  background-color:#24465C;
`;
const Title = styled.h1`
color:  white;
  font-size: 2em;
  position: relative;
  margin: 0 auto 1em;
  padding: 1em 1em 0.25em 1em;
  text-align: center;
  text-transform: uppercase;
`;
export default Cart;
