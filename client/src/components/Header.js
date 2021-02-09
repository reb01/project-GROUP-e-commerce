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
        <Logo
          src={require("../Wearteklogo.png")}
          alt="WearTek"
          height="200px"
        ></Logo>
        <nav>
          <NavLinkList>
            <NavLinkListItem tabindex="0">
              <RiHome2Line size="35" />
              <NavigationLink to="/">Main</NavigationLink>
            </NavLinkListItem>
            <NavLinkListItem tabindex="0">
              <RiStore2Line size="35" />
              <NavigationLink to="/store/products/all">Store</NavigationLink>
            </NavLinkListItem>
            <NavLinkListItem tabindex="0">
              <RiShoppingCartLine size="35" />
              <NavigationLink to="/cart">Cart</NavigationLink>
            </NavLinkListItem>
            <NavLinkListItem tabindex="0">
              <RiInformationLine size="35" />
              <NavigationLink to="/contactinfo">Contact Us</NavigationLink>
            </NavLinkListItem>
          </NavLinkList>
        </nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.fifth};
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 200px;
`;

const NavLinkList = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavLinkListItem = styled.li`
  display: flex;
  margin-left: 20px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  background-color: ${COLORS.fifth};
  border-style: solid;
  border-color: ${COLORS.fifth};
  border-radius: 25px;
  color: black;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  padding: 6px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 10px;

  &:active,
  :focus,
  :hover {
    background-color: ${COLORS.fourth};
    color: ${COLORS.first};
    border-radius: 25px;
  }
`;

const Logo = styled.img`
  display: flex;
  position: absolute;
  top: 0px;
  left: 100px;
`;

export default Header;
