import { createGlobalStyle } from 'styled-components';
import colors from '../colors';
import sizes from '../sizes';

export default createGlobalStyle`
    body {
        background-color: ${colors.background};
        font-family: Roboto;
    }

    a {
        font-family: Roboto;
        color: ${colors.light};
        font-size: ${sizes.font.fontSizeMedium};
        transition: opacity ease-in-out 0.5s;
        text-decoration: none;
        padding-bottom: 40px;

        &:hover{
            opacity: 0.5;
            transition: opacity ease-in-out 0.5s;
        }
    }
`;
