import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import {
  RiHome2Line,
  RiShoppingCartLine,
  RiInformationLine,
  RiStore2Line,
} from "react-icons/ri";
import { COLORS } from "../constants";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  function handleClick() {
    // history.push(`/`);
  }

  return (
    <>
      <Wrapper>
        <InternalWrapper>
          <Logo
            src={require("../assets/wearteklogo.png")}
            alt="WearTek"
            height="98px"
          ></Logo>
          <Motto>How do you wear it?</Motto>
          <nav>
            <NavLinkList>
              <NavLinkListItem tabindex="0">
                <RiHome2Line size="35" />
                <NavigationLink to="/">Main</NavigationLink>
              </NavLinkListItem>
              <NavLinkListItem tabindex="0">
                <RiStore2Line size="35" />
                <NavigationLink to="/store">Store</NavigationLink>
              </NavLinkListItem>
              <NavLinkListItem tabindex="0">
                <RiInformationLine size="35" />
                <NavigationLink to="/contactinfo">Support</NavigationLink>
              </NavLinkListItem>
              <NavLinkListItem tabindex="0">
                <RiShoppingCartLine size="35" />
                <NavigationLink to="/cart">Cart</NavigationLink>
              </NavLinkListItem>
            </NavLinkList>
          </nav>
        </InternalWrapper>
        <Ad>
          <AdText>
            FREE SHIPPING ON ORDERS $25 AND UP. FREE EXPRESS SHIPPING ON MOST
            ORDERS $999 AND UP.*
          </AdText>
        </Ad>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InternalWrapper = styled.div`
  position: relative;
  background-color: ${COLORS.fifth};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 100px;
`;

const Motto = styled.p`
  position: absolute;
  left: 300px;
  color: ${COLORS.secondary};
  font-size: 35px;
  font-weight: 600;
`;

const Ad = styled.div`
  display: flex;
  height: 40px;
  background-color: ${COLORS.secondary};
  color: white;
  justify-content: center;
  align-items: center;
`;

const AdText = styled.p``;

const NavLinkList = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavLinkListItem = styled.li`
  display: flex;
  padding: 10px;
  margin-right: 10px;
  outline: 0;
  &:active,
  :focus,
  :hover {
    background-color: ${COLORS.fourth};
    color: ${COLORS.first};
    border-radius: 25px;
    transition: color 0.5s ease-in-out;
    transition-timing-function: ease-in-out;
    transition-property: box-shadow, color;
    box-shadow: 0 0.1em 0.25em 0 rgba(1, 0, 0, 0.25);
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  background-color: ${COLORS.fifth};
  border-style: solid;
  border-color: ${COLORS.fifth};
  border-radius: 25px;
  color: ${COLORS.secondary};
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  outline: 0;
`;

const Logo = styled.img`
  display: flex;
  position: absolute;
  left: 100px;
`;

export default Header;
