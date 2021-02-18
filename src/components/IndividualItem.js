import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import styled from "styled-components";
import { COLORS } from "../constants";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const IndividualItem = ({
  id,
  name,
  price,
  imageSrc,
  numInStock,
  companyName,
  companyFrom,
  bodyLocation,
}) => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(
      addItem({
        id,
        name,
        price,
        imageSrc,
        companyName,
        companyFrom,
        bodyLocation,
      })
    );
  };

  return (
    <Main>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={
              typeof imageSrc != "undefined" && imageSrc
                ? imageSrc
                : require("../assets/noImage.gif")
            }
            alt="itemImage"
          />
        </ImageWrapper>
      </Wrapper>
      <Confirm>
        <Wrapper2>
          <WrapperCompany>
            <SoldBy>Sold by {companyName}, </SoldBy>{" "}
            <ShippedBy> {companyFrom}</ShippedBy>
            <Description>Description</Description>
            <Name>
              {typeof name != "undefined" && name ? name : "Unknown product"}
            </Name>
          </WrapperCompany>
     
        <Container>
          <Price>{typeof price != "undefined" && price ? price : "$0"}</Price>
          {numInStock === 0 && (
            <SoldOut>
              <AiOutlineExclamationCircle color="red" />
              <SoldOutText>sold out!</SoldOutText>
            </SoldOut>
          )}
        </Container>
        </Wrapper2>
        <ButtonWrap>
          <Button onClick={(ev) => handleClick(ev)} disabled={numInStock === 0}>
            ADD TO CART
          </Button>
        </ButtonWrap>
      </Confirm>
    </Main>
  );
};

const Main = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
  color: black;
`;
const Wrapper = styled.div`
  grid-area: main;
  width: 650px;
  max-height: 480px;
  margin: 10px;
  padding: 50px 35px;
  background-color: ${COLORS.lightGrey};
`;
const Confirm = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding:15px;
  height: 300px;
  width: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`;
const ButtonWrap = styled.div`
margin:15px;
`;
const Wrapper2 = styled.div`
  color: black;
`;
const SoldBy = styled.div`
  font-size: 15px;
`;
const ShippedBy = styled.div``;
const WrapperCompany = styled.div`
  color: ${COLORS.secondary};
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-top: 35px;
  padding-bottom: 35px;
`;
const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
border-top: 1px solid lightgray;
margin-top:5px;
padding-top:5px;


`;

const SoldOut = styled.div``;
const Image = styled.img`
  width: 300px;
  object-fit: contain;
`;
const Description = styled.h1``;
const Button = styled.button`
  font-weight: bolder;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  color: white;
  background-color: ${COLORS.third};
  display: ${(p) => (p.hidden ? "none" : "block")};
  opacity: 0.9;
  :hover:enabled {
    cursor: pointer;
    opacity: 0.7;
  }
  :disabled {
    display: none;
  }
`;

const Name = styled.p`
  font-size: 18px;
  margin-top: auto;
  color: ${COLORS.primary};
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.secondary};
  margin-bottom: 0px;
`;

const SoldOutText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 5px;
`;

export default IndividualItem;
