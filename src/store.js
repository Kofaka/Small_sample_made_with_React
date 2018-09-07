import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {getTabsInfo} from './actions/api';
import apiMiddleware from './middlewares/api';
import tabsMiddleware from './middlewares/tabs';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger({collapsed: true});

const middlewares = [apiMiddleware, tabsMiddleware, thunkMiddleware, loggerMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, composedEnhancers);

store.dispatch(getTabsInfo());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
