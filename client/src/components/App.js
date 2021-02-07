import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import GlobalStyles from "../GlobalStyles";


function App() {
  return (
    <>
      <>
        <Router>
          <Wrapper>
            <Header />
            <Body />
            <Footer />
          </Wrapper>
          <GlobalStyles />
        </Router>
      </>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
