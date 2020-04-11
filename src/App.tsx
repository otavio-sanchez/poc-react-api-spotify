import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Theme } from './assets/theme';
import { routes } from './routes';
import { ConfigRoute } from './routes/types';

const App = (): JSX.Element => {
    return (
        <Router>
            <Theme />
            <Switch>
                {routes.map(
                    ({ component: Component, path, id, exact }: ConfigRoute): JSX.Element => (
                        <Route key={id} path={path} exact={exact}>
                            <Component />
                        </Route>
                    ),
                )}
            </Switch>
        </Router>
    );
};

export default App;
