import React from "react";

import { useParams } from "react-router-dom";

import { COLORS } from "../constants";
import styled from "styled-components";

const Item = () => {
  let { id } = useParams();
  return (
    <>
      <Wrapper>
        <p>This item ID is {id}</p>
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

export default Item;
