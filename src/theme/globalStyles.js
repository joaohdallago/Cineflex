import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        padding: 0;
        border: 0;
        margin: 0;

        text-decoration: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }
    
`

export default GlobalStyle