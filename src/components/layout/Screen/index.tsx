import * as React from 'react';
import { ScreenContainer, ScreenContent } from './style';
import { Props } from './types';
import { Container } from '../../grid';
import { Header } from '../../layout';

const Screen = ({ children }: Props): JSX.Element => {
    return (
        <ScreenContainer>
            <Header name="Logo" />
            <Container>{children}</Container>
        </ScreenContainer>
    );
};

export default Screen;
