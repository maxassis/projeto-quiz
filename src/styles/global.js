import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-family: 'Oxygen', sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

html {
  font-size: 65.5%;
  background-color: #0db4a4;

  @media (max-width: 600px) {
    font-size: 55%;


  }


}

button {
  background-color: transparent;
  cursor: pointer;
}
`;

export default GlobalStyles;
