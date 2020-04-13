import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routesPath } from '../../routes';
import { Form, TextInput } from '../../components/form';
import { Props } from './types';
import { getSearch } from '../../services/search';
import { Loading } from '../../components/layout';
import { Albums } from '../../components/list';
import { Album } from '../../components/list/Albums/types';
import { Col, Container, Row } from '../../components/grid'

const Home = ({ history }: Props): JSX.Element => {
    const [loading, setLoading] = React.useState(false);
    const [time, setTime] = React.useState(null);
    const [valueSearch, setValueSearch] = React.useState('');

    const request = async (value: string): Promise<void> => {
        setValueSearch(value);
        const search = await getSearch(value, 'track,artist,album', 10);
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
        history.push(`${routesPath.albums}/${album.id}`);
    };

    return (
        <>
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
            {loading ? (
                <Loading />
            ) : (
                <Albums
                    title={`Busca por: ${valueSearch}`}
                    data={[]}
                    onClickItem={(album: Album): void => selectAlbum(album)}
                />
            )}
        </>
    );
};

export default withRouter(Home);
