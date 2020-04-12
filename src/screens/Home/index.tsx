import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from '../../routes';
import { Form, TextInput } from '../../components/form';

import { Albums } from '../../components/list';

const Home = (): JSX.Element => {
    const mock = [
        {
            image: 'https://loremflickr.com/640/36',
            redirect: '/albums',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            redirect: '/albums',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            redirect: '/albums',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            redirect: '/albums',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
        {
            image: 'https://loremflickr.com/640/36',
            redirect: '/albums',
            id: 'a',
            name: 'Teste',
            artist: 'Teste aaa',
        },
    ];
    return (
        <>
            <Form>
                <TextInput
                    name="search"
                    label="Busque por artistas, álbuns ou músicas"
                    placeholder="Comece a escrever..."
                    onChange={(name, value) => {
                        console.log(name, value);
                    }}
                />
            </Form>
            <Albums title="Busca por:" data={mock} />
        </>
    );
};

export default Home;
