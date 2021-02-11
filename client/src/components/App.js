import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MapSection from './Map'

import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import GlobalStyles from "../GlobalStyles";


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

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
