import * as React from 'react';
import { LabelContent } from './style';
import { Props } from './types';
const Label = ({ children }: Props): JSX.Element => {
    return <LabelContent>{children}</LabelContent>;
};

export default Label;
