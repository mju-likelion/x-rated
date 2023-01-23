import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './GlobalFont.css';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
    };
    button{
        cursor: pointer;
        border :none;
    };
    input{
        padding-left: 10px;
    };
`;

export default GlobalStyle;
