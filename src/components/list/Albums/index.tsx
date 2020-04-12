import * as React from 'react';
import { Props } from './types';
import { Text } from '../../typography';
import { Container, Row } from '../../grid';
import Album from './components/Album';

const Albums = ({ data, title, height }: Props): JSX.Element => {
    return (
        <>
            <Text type="title">
                <> {title} </>
            </Text>
            <Container>
                <Row columnsDesktop={5} columnsTablet={2} columnsMobile={1} spacingRow={30} spacingColumn={30}>
                    {data.length ? (
                        data.map((album) => (
                            <Album
                                artist={album.artist}
                                id={album.id}
                                image={album.image}
                                name={album.name}
                                redirect={album.redirect}
                                height={height}
                                key={album.id}
                            />
                        ))
                    ) : (
                        <Text>
                            <>Nada encontrado.</>
                        </Text>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Albums;
