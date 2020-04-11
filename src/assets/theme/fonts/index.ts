import { createGlobalStyle } from 'styled-components';
import * as RobotoWoff from './Roboto-Regular.woff';
import * as RobotoWoffTwo from './Roboto-Regular.woff';
import * as RobotoEot from './Roboto.eot';
import * as RobotoTff from './Roboto.ttf';

export default createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: url(${RobotoEot});
    src: url(${RobotoWoff}) format('woff'),
         url(${RobotoTff}) format('truetype'),
         url(${RobotoWoffTwo}) format('woff2');
    font-weight: normal;
    font-style: normal;
}
`;
