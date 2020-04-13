import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Theme } from './assets/theme';
import { routes } from './routes';
import { ConfigRoute } from './routes/types';
import { Screen } from './components/layout';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Router>
                <Theme />
                <Screen>
                    <Switch>
                        {routes.map(
                            ({ component: Component, path, id, exact }: ConfigRoute): JSX.Element => (
                                <Route key={id} path={path} exact={exact}>
                                    <Component />
                                </Route>
                            ),
                        )}
                    </Switch>
                </Screen>
            </Router>
        </Provider>
    );
};

export default App;
