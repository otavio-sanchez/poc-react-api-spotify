import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routesPath } from '../../routes';
import { Form, TextInput } from '../../components/form';
import { Props } from './types';
import { getSearch } from '../../services/search';
import { albumsAccessed, albumsRecent } from './store/actions';
import { stateType } from './store/actionType';
import { Albums } from '../../components/list';
import { Album } from '../../components/list/Albums/types';
import { Col, Container, Row } from '../../components/grid';
import { nameArtist } from '../../utils/infoAlbum';

const Home = ({ history }: Props): JSX.Element => {
    const [loading, setLoading] = React.useState(false);
    const [time, setTime] = React.useState(null);
    const [search, setSearch] = React.useState('');
    const [valueSearch, setValueSearch] = React.useState('');
    const [albumsList, setAlbumsList] = React.useState([]);
    const isSearch = search && search.length > 2;

    const accessed = useSelector((state: stateType) => state.albums.accessed);

    const recent = useSelector((state: stateType) => state.albums.recent);

    const dispatch = useDispatch();

    const request = async (value: string): Promise<void> => {
        setValueSearch(value);
        const { albums } = await getSearch(value, 'album', 10);

        if (albums && albums.items) {
            dispatch(albumsRecent(albums.items.slice(0, 5)));
            setAlbumsList(albums.items);
        }
        setLoading(false);
    };

    const onSearch = async (name: string, value: string): Promise<void> => {
        setSearch(value);

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
        dispatch(albumsAccessed(accessed.concat(album)));
        history.push(`${routesPath.albums}/${nameArtist(album.artists).replace(/\s+/g, '-')}/${album.id}`);
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
                    {isSearch ? (
                        <Col>
                            <Albums
                                loading={loading}
                                title={`Busca por: ${valueSearch}`}
                                data={albumsList}
                                onClickItem={(album: Album): void => selectAlbum(album)}
                            />
                        </Col>
                    ) : (
                        <></>
                    )}
                    {!isSearch && recent.length ? (
                        <Col>
                            <Albums
                                title={`Buscas recentes`}
                                data={recent}
                                onClickItem={(album: Album): void => selectAlbum(album)}
                            />
                        </Col>
                    ) : (
                        <></>
                    )}
                    {!isSearch && accessed.length ? (
                        <Col>
                            <Albums
                                title={`Acessos recentes`}
                                data={accessed}
                                onClickItem={(album: Album): void => selectAlbum(album)}
                            />
                        </Col>
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default withRouter(Home);
