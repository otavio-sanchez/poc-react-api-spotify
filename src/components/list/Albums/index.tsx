import * as React from 'react';
import { Props, Album as AlbumType } from './types';
import { Text } from '../../texts';
import { Container, Row, Col } from '../../grid';
import { Loading } from '../../../components/layout';
import Album from './components/Album';

const Albums = ({ data, title, height, onClickItem, loading }: Props): JSX.Element => {
    const onHandlerClick = (album: AlbumType): Function => {
        return onClickItem(album);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    <Row columnsDesktop={1} columnsTablet={1} columnsMobile={1} spacingRow={30} spacingColumn={30}>
                        <Col>
                            <Text type="title">
                                <> {title} </>
                            </Text>
                        </Col>
                    </Row>
                    {data.length ? (
                        <Row columnsDesktop={5} columnsTablet={2} columnsMobile={1} spacingRow={30} spacingColumn={30}>
                            {data.map((album: AlbumType) => (
                                <Col key={album.id}>
                                    <Album
                                        artists={album.artists}
                                        id={album.id}
                                        images={album.images}
                                        name={album.name}
                                        height={height}
                                        onClick={(): Function => onHandlerClick(album)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Row columnsDesktop={1} columnsTablet={1} columnsMobile={1} spacingRow={30} spacingColumn={30}>
                            <Col>
                                <Text>
                                    <>Nada encontrado.</>
                                </Text>
                            </Col>
                        </Row>
                    )}
                </Container>
            )}
        </>
    );
};

export default Albums;
