import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../actions";
import { getStoreItemArray } from "../reducers/item-reducer";
const CartItem = () => {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();
  const storeState = useSelector(getStoreItemArray);
useEffect(()=> {

  setNewItem(storeState);
},[storeState])


  return (
    <Wrapper>
      <List>
        {newItem &&
          newItem.map((item) => {
            return <Items key={item.id}>{item.name}</Items>;
          })}
      </List>{" "}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-style: solid;
  border-width: 1px;
  border-color: gray;
`;
const List = styled.ul``;
const Items = styled.li``;
export default CartItem;
