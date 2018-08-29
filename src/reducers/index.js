import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import tabs from './tabs';

const rootReducer = combineReducers({tabs, routing: routerReducer});

export default rootReducer;