import {GET_TABS_INFO} from '../actions/actionTypes';

const tabsMiddleware = (store) => next => action => {
    switch (action.type) {
        case GET_TABS_INFO.SUCCESS:
            action.payload.sort((a, b) => a.order - b.order);
            next(action);
            break;

        default:
            next(action);
            break;
    }
};

export default tabsMiddleware;