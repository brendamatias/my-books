import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroud};
  }

  body, button, a {
    color: ${(props) => props.theme.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    margin: 0;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.violet};
    color: #fff;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  input {
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.theme.backgroudSecondary};
    width: 100%;
    border: 0;
    font-size: 14px;
    color: ${(props) => props.theme.primary};

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${(props) => props.theme.primary};
      -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.backgroudSecondary} inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export default GlobalStyle;
