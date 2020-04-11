import * as React from 'react';
import { HeaderContent, Logo, LogoSpotify } from './style';
import { Props } from './types';
import { Row, Col, Container } from '../../grid';

const Header = ({ name }: Props): JSX.Element => {
    return (
        <HeaderContent>
            <Container>
                <Row gridTemplateColumns={'50px auto'}>
                    <Col align="start-flex">
                        <Logo>
                            <LogoSpotify />
                        </Logo>
                    </Col>
                </Row>
            </Container>
        </HeaderContent>
    );
};

export default Header;
