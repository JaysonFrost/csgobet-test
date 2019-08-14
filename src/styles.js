import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: Roboto;
        font-style: normal;
        font-weight: 200;
        font-size: 14px;
        line-height: 20px;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        cursor: pointer;
        border: 0;
        padding: 0;
        background: transparent;
    }
`

export default GlobalStyle;