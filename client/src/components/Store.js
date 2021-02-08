import React from "react";
import ErrorPage from "./ErrorPage";

import { COLORS } from "../constants";
import styled from "styled-components";

const Store = () => {
  return (
    <>
      <Wrapper>
      
        <p>This is the Store</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 800px;
`;

export default Store;
