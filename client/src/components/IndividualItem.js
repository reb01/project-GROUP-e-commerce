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
        category,
        bodyLocation,
        imageSrc,
        numInStock,
        companyName,
        companyFrom,
        bodyLocation,
      })
    );
  };

  return (
    <MainWrapper>
      <Title>
        <NameProduct>{name}</NameProduct>
      </Title>
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
        <SideBar>
          <Confirm>
            <WrapperCompany>
              <Description>Description</Description>
              <Name>
                {typeof name != "undefined" && name ? name : "Unknown product"}
              </Name>
              <Details>
                <Seller>
                  <SoldBy>
                    Sold by <Span>{companyName}</Span>,{" "}
                  </SoldBy>{" "}
                  <ShippedBy>{companyFrom} </ShippedBy>
                </Seller>
                <Category>
                  <SubCategory>
                    <Span>Category : </Span>
                    {category}
                  </SubCategory>
                  <Location>
                    <Span>Body location : </Span>
                    {bodyLocation}
                  </Location>
                </Category>
              </Details>
            </WrapperCompany>
            <Container>
              <Price>
                {typeof price != "undefined" && price ? price : "$0"}
              </Price>
              {numInStock === 0 && (
                <SoldOut>
                  <AiOutlineExclamationCircle color="red" />
                  <SoldOutText>sold out!</SoldOutText>
                </SoldOut>
              )}
            </Container>
            <ButtonWrap>
              <Button
                onClick={(ev) => handleClick(ev)}
                disabled={numInStock === 0}
              >
                ADD TO CART
              </Button>
            </ButtonWrap>
          </Confirm>
        </SideBar>
      </Main>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 100px;
  }
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  margin-top: -50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 0px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 30vh;
  }
`;
const SideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 15vh;
    margin-bottom: 50px;
  }
`;
const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  min-width: 30vw;
  max-width: 35vw;
  min-height: 40vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  @media (max-width: 768px) {
    min-height: 27vh;
    max-height: 27vh;
    min-width: 80vw;
    max-width: 80vw;
  }
`;

const WrapperCompany = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 5px;
  color: ${COLORS.secondary};
  color: black;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Title = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;
const NameProduct = styled.h1`
  color: black;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px lightgray solid;
`;
const Seller = styled.div`
  display: flex;
  flex-direction: column;
`;
const SoldBy = styled.div`
  font-size: 20px;
`;
const ShippedBy = styled.div`
  font-size: 18px;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const SubCategory = styled.div``;

const Location = styled.div``;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;

  align-items: center;
  padding: 70px;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Name = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  color: ${COLORS.primary};
  font-weight: bold;
`;
const SoldOut = styled.div``;
const Image = styled.img`
  min-width: 300px;
  max-width: 450px;
  max-height: 300px;

  object-fit: contain;
`;
const Description = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: bolder;
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
