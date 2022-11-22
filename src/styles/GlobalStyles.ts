import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("./fonts.css");
  
  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
  }

  header {
    position: fixed;
    top: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  textarea {
    -webkit-appearance: none;
  }
`;
