import * as React from 'react';
import { ColContent } from './style';
import { Props } from './types';

const Col = ({ children, align }: Props): JSX.Element => {
    return <ColContent align={align}>{children}</ColContent>;
};

export default Col;
