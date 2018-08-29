import * as actionCreators from '../actions/actionCreators';

const tabsMiddleware = (store) => next => action => {
    switch (action.type) {
        case actionCreators.GET_TABS_INFO:
            action.tabsInfo.sort((a, b) => a.order - b.order);
            next(action);
            break;

        default:
            next(action);
            break;
    }
};

export default tabsMiddleware;