import * as React from 'react';
import { ContainerContent } from './style';
import { Props } from './types';

const Container = ({ children, maxWidth }: Props): JSX.Element => {
    return <ContainerContent maxWidth={maxWidth}>{children}</ContainerContent>;
};

export default Container;
