import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import styled from "styled-components";
import { COLORS } from "../constants";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const IndividualItem = ({
  _id,
  name,
  price,
  imageSrc,
  category,
  numInStock,
  companyName,
  companyFrom,
  bodyLocation,
}) => {
  console.log(name);
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(
      addItem({
        _id,
        name,
        price,
        imageSrc,
        numInStock,
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
   
          <SoldBy>
            Sold by <Span>{companyName}</Span>,{" "}
          </SoldBy>{" "}
          <ShippedBy>{companyFrom} </ShippedBy>
          <WrapperCompany>
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-around;
  padding:100px;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-height: 480px;
  margin: 10px;
  padding: 50px 35px;
  background-color: ${COLORS.lightGrey};
`;
const Confirm = styled.div`
  display: flex;
  flex-direction: column;
padding:10px;
  min-width: 20vw;
  max-width:25vw;
  min-height: 30vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`;
const WrapperCompany = styled.div`
display:flex;
flex-direction:column;
margin-top:10px;

padding:5px;
  color: ${COLORS.secondary};
  color: black;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;
const SoldBy = styled.div`
  font-size: 15px;
`;
const ShippedBy = styled.div``;


const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;



const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-top: 35px;
  padding-bottom: 35px;
`;

const Name = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top:15px;
  padding-bottom:15px;
  font-size: 20px;
  color: ${COLORS.primary};
  font-weight: bold;
`;
const SoldOut = styled.div``;
const Image = styled.img`
  width: 300px;
  object-fit: contain;
`;
const Description = styled.div`
font-size:20px;
padding-bottom:10px;
font-weight:bolder;
  text-decoration: underline;
`;
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

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.secondary};
  margin-top: 20px;
`;

const SoldOutText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 5px;
`;
const Span = styled.span`
  font-weight: bolder;
`;

export default IndividualItem;
