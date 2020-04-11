import * as React from 'react';
import { Props } from './types';
import { FormContent } from './style';

const Form = ({ children }: Props): JSX.Element => {
    return <FormContent>{children}</FormContent>;
};

export default Form;
