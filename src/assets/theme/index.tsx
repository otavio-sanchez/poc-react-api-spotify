import * as React from 'react';
import Fonts from './fonts';
import ResetCSS from './resetCSS';
import MainStyle from './mainStyle';

const Theme = (): JSX.Element => (
    <>
        <ResetCSS />
        <Fonts />
        <MainStyle />
    </>
);

export { Theme };
