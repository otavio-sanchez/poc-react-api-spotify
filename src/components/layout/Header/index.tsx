import * as React from 'react';
import { HeaderContent, Logo, LogoSpotify } from './style';
import { Props } from './types';
import { Row, Col, Container } from '../../grid';
import { Link } from 'react-router-dom';
import { routesPath } from '../../../routes';

const Header = ({ name }: Props): JSX.Element => {
    return (
        <HeaderContent>
            <Container maxWidth={1420} alternative>
                <Row gridTemplateColumns={'50px auto'}>
                    <Col align="start-flex">
                        <Logo>
                            <Link to={routesPath.home} title={name}>
                                <LogoSpotify width={50} />
                            </Link>
                        </Logo>
                    </Col>
                </Row>
            </Container>
        </HeaderContent>
    );
};

export default Header;
