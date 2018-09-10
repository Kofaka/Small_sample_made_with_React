import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import store, {history} from '../store';

import App from './App';
import Main from './Main';

const RootRouter = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Main}/>
                <Route path="*" component={Main}/>
            </Route>
        </Router>
    </Provider>
);

export default RootRouter;
