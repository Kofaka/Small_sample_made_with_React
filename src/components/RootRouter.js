import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import store, {history} from '../store';

import App from './App';
import Main from './Main';
import MissingPage from './MissingPage';
import * as tabsComponents from './tabs';

const RootRouter = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Main}/>
                <Route path="/DummyTable" component={tabsComponents.DummyTable}/>
                <Route path="/dummyChart" component={tabsComponents.DummyChart}/>
                <Route path="/dummyList" component={tabsComponents.DummyList}/>
            </Route>
            <Route path='*' exact component={MissingPage}/>
        </Router>
    </Provider>
);

export default RootRouter;
