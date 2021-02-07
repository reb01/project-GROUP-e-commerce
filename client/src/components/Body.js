import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
import Cart from "./Cart";
import Contact from "./Contact";
import Item from "./Item";
import Main from "./Main";
import Store from "./Store";

const Body = () => {
  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Wrapper>
        <Switch>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/contactinfo">
            <Contact />
          </Route>
          <Route path="/item/:id">
            <Item/>
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: white;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

export default Body;
