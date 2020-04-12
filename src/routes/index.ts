import { ConfigRoute } from './types';
import Home from '../screens/Home';
import Albums from '../screens/Albums';

const routesPath = {
    home: '/',
    albums: '/albums',
};

const routes: ConfigRoute[] = [
    {
        component: Home,
        path: routesPath.home,
        exact: true,
        id: 'Home',
    },
    {
        component: Albums,
        path: `${routesPath.albums}/:id`,
        exact: true,
        id: 'Albums',
    },
];

export { routes, routesPath };
