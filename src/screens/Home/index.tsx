import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routesPath } from '../../routes';
import { Form, TextInput } from '../../components/form';
import { Props } from './types';
import { getSearch } from '../../services/search';

import { Albums } from '../../components/list';
import { Album } from '../../components/list/Albums/types';
import { Col, Container, Row } from '../../components/grid';

const Home = ({ history }: Props): JSX.Element => {
    const [loading, setLoading] = React.useState(false);
    const [time, setTime] = React.useState(null);
    const [valueSearch, setValueSearch] = React.useState('');
    const [albumsList, setAlbumsList] = React.useState([]);

    const request = async (value: string): Promise<void> => {
        setValueSearch(value);
        const { albums } = await getSearch(value, 'album', 10);

        if (albums && albums.items) {
            console.log(albums.items);
            setAlbumsList(albums.items);
        }
        setLoading(false);
    };

    const onSearch = (name: string, value: string): void => {
        if (time) {
            setLoading(false);
            setTime(clearTimeout(time));
        }
        if (value && value.length > 2) {
            setLoading(true);
            setTime(
                setTimeout(() => {
                    request(value);
                }, 2000),
            );
        }
    };

    const selectAlbum = (album: Album): void => {
        console.log(album.id);
        history.push(`${routesPath.albums}/${album.id}`);
    };

    return (
        <>
            <Container>
                <Row spacingRow={50}>
                    <Col>
                        <Form>
                            <TextInput
                                name="search"
                                label="Busque por artistas, álbuns ou músicas"
                                placeholder="Comece a escrever..."
                                onChange={(name, value): void => {
                                    onSearch(name, value);
                                }}
                            />
                        </Form>
                    </Col>
                    <Col>
                        <Albums
                            loading={loading}
                            title={`Busca por: ${valueSearch}`}
                            data={albumsList}
                            onClickItem={(album: Album): void => selectAlbum(album)}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default withRouter(Home);
