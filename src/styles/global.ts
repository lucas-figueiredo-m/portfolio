import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.gradient};
    color: ${(props) => props.theme.colors.text};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;

    @media(max-width: 1450px){
      max-width: 70rem;
    }
    @media(max-width: 1000px){
      max-width: 50rem;
    }
    @media(max-width: 700px){
      padding: 0 2rem
    }
  }
`;
