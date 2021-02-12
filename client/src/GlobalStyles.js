import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

html,
body,
div,
span,
p,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
html {font-family: 'Alata', sans-serif;}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  
}
`;

export default GlobalStyles;
