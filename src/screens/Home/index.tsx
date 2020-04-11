import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from '../../routes';

const Home = (): JSX.Element => (
    <>
        <Link to={routesPath.albums}>álbuns</Link> <>Home</>
    </>
);

export default Home;
