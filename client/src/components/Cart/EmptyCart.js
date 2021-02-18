import React from "react";
import styled from "styled-components";

const EmptyCart = () => {
  return (
    <Wrapper>
      <Empty>
        <Message>Your Cart is Empty</Message>
      </Empty>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 350px;
  width: 800px;
  border: 3px lightgray solid;
`;
const Message = styled.h1`
  color: lightgray;
`;

export default EmptyCart;
