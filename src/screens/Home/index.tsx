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
            dispatch(albumsRecent(albums.items));
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
                }, 1000),
            );
        }
    };

    const addAccessed = (album: Album): Album[] => {
        const check = accessed.filter((item: Album) => item.id === album.id);
        if (check.length) {
            return accessed;
        }

        return accessed.concat(album);
    };

    const selectAlbum = (album: Album): void => {
        dispatch(albumsAccessed(addAccessed(album)));
        history.push(`${routesPath.albums}/${nameArtist(album.artists).replace(/\s+/g, '-')}/${album.id}`);
    };

    const renderAlbumsSearch = (): JSX.Element => {
        if (isSearch) {
            return (
                <Col>
                    <Albums
                        loading={loading}
                        title={`Busca por: ${valueSearch}`}
                        data={albumsList}
                        onClickItem={(album: Album): void => selectAlbum(album)}
                    />
                </Col>
            );
        }
        return <></>;
    };

    const renderAlbumsAccessed = (): JSX.Element => {
        if (!isSearch && accessed.length) {
            return (
                <Col>
                    <Albums
                        title={`Álbums acessados recentemente`}
                        data={accessed}
                        onClickItem={(album: Album): void => selectAlbum(album)}
                    />
                </Col>
            );
        }
        return <></>;
    };

    const renderAlbumsRecent = (): JSX.Element => {
        if (!isSearch && recent.length) {
            return (
                <Col>
                    <Albums
                        title={`Álbums buscados recentemente`}
                        data={recent}
                        onClickItem={(album: Album): void => selectAlbum(album)}
                    />
                </Col>
            );
        }
        return <></>;
    };

    return (
        <>
            <Container>
                <Row spacingRow={60}>
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
                    {renderAlbumsSearch()}
                    {renderAlbumsRecent()}
                    {renderAlbumsAccessed()}
                </Row>
            </Container>
        </>
    );
};

export default withRouter(Home);
