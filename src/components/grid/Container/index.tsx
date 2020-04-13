import * as React from 'react';
import { ContainerContent } from './style';
import { Props } from './types';

const Container = ({ children, maxWidth, alternative }: Props): JSX.Element => {
    return (
        <ContainerContent alternative={alternative} maxWidth={maxWidth}>
            {children}
        </ContainerContent>
    );
};

export default Container;
