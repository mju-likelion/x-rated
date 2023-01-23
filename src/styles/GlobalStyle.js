import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
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
