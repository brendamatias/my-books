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
    background-color: ${({ theme }) => theme.backgroud};
  }

  body, button, a {
    color: ${({ theme }) => theme.primary};
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
    background-color: ${({ theme }) => theme.violet};
    color: #fff;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
  }

  input {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.backgroudSecondary};
    width: 100%;
    border: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.primary};
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.backgroudSecondary} inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    &::placeholder {
      color: ${({ theme }) => theme.gray};;
    }
  }
`;

export default GlobalStyle;
