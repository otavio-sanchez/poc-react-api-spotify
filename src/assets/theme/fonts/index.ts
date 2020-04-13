import { createGlobalStyle } from 'styled-components';
import * as RobotoWoff from './Roboto/Roboto-Regular.woff';
import * as RobotoWoffTwo from './Roboto/Roboto-Regular.woff';
import * as RobotoEot from './Roboto/Roboto.eot';
import * as RobotoTff from './Roboto/Roboto.ttf';

export default createGlobalStyle`
     @font-face {
     font-family: 'Roboto';
     font-style: normal;
     font-weight: 400;
     src: url('${RobotoEot.default}'); 
     src: local('Roboto'),
          url('${RobotoEot.default}?#iefix') format('embedded-opentype'), 
          url('${RobotoWoffTwo.default}') format('woff2'), 
          url('${RobotoWoff.default}') format('woff'), 
          url('${RobotoTff.default}') format('truetype')
     }
`;
