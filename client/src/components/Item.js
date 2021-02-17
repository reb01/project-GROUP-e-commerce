import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Tools/Spinner";
import ErrorPage from "./ErrorPage";
import IndividualItem from "./IndividualItem";
import { useParams } from "react-router-dom";

import { COLORS } from "../constants";
import styled from "styled-components";

const Item = () => {
  const { currentStore } = useSelector((state) => state.store);
  const [itemData, setItemData] = useState([]);
  const [company, setCompany] = useState([]);
  const [status, setStatus] = useState("idle");
  let { id } = useParams();
  console.log(currentStore);
  useEffect(() => {
    setStatus("loading");
    if (id) {
      fetch(`/item/${id}`)
        .then((response) => response.json())
        .then((response) => {
          setItemData(response.data);
          setStatus("idle");
        })
        .catch(() => {
          setStatus("error");
        });
    }
  }, []);

  useEffect(() => {
    setStatus("loading");
    if (id) {
      fetch(`/company/${id}`)
        .then((response) => response.json())
        .then((response) => {
          setCompany(response.data);
          setStatus("idle");
        })
        .catch(() => {
          setStatus("error");
        });
    }
  }, []);
  console.log(itemData);
  return (
    <Wrapper>
      {status === "loading" && <Spinner />}
      {status === "error" && <ErrorPage />}
      {status === "idle" && (
        <ItemsWrapper>
          <IndividualItem
            key={itemData._id}
            _id={itemData._id}
            name={itemData.name}
            price={itemData.price}
            imageSrc={itemData.imageSrc}
            category={itemData.category}
            bodyLocation={itemData.body_location}
            numInStock={itemData.numInStock}
            companyName={company.name}
            companyFrom={company.country}
          />
        </ItemsWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  color: ${COLORS.primary};
  min-height: 700px;
`;
const ItemsWrapper = styled.div``;
export default Item;
