import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("./fonts.css");

  body {
    height: 100vh;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blackTwo};
  }
  
  #root {
    height: 100%;
  }

  #scrollContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: 0;
    font-family: inherit;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  input,
  textarea {
    -webkit-appearance: none;
  }
`;
