import * as React from 'react';
import { Props, Album as AlbumType } from './types';
import { Text } from '../../typography';
import { Container, Row } from '../../grid';
import Album from './components/Album';

const Albums = ({ data, title, height, onClickItem }: Props): JSX.Element => {
    const onHandlerClick = (album: AlbumType): Function => {
        console.log('oif');
        return onClickItem(album);
    };

    return (
        <>
            <Text type="title">
                <> {title} </>
            </Text>
            <Container>
                <Row columnsDesktop={5} columnsTablet={2} columnsMobile={1} spacingRow={30} spacingColumn={30}>
                    {data.length ? (
                        data.map((album: AlbumType) => (
                            <Album
                                artist={album.artist}
                                id={album.id}
                                image={album.image}
                                name={album.name}
                                height={height}
                                key={album.id}
                                onClick={(): Function => onHandlerClick(album)}
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
