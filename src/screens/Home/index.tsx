import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routesPath } from '../../routes';
import { Form, TextInput } from '../../components/form';
import { Props } from './types';

import { Albums } from '../../components/list';
import { Album } from '../../components/list/Albums/types';

const Home = ({ history }: Props): JSX.Element => {
    const mock = [
        {
            image: 'https://loremflickr.com/640/36',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
    ];

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
                        console.log(name, value);
                    }}
                />
            </Form>
            <Albums title="Busca por:" data={mock} onClickItem={(album: Album): void => selectAlbum(album)} />
        </>
    );
};

export default withRouter(Home);
