import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from '../../routes';
import { Form, TextInput } from '../../components/form';

const Home = (): JSX.Element => (
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
        <Link to={routesPath.albums}>álbuns</Link> <>Home</>
    </>
);

export default Home;
