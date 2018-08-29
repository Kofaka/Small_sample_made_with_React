import {
    GET_TABS_INFO,
} from '../actions/actionCreators';

const initialState = {
    tabsInfo: [],
};

function tabs(state = initialState, action) {
    switch (action.type) {
        case GET_TABS_INFO:
            return {
                ...state,
                tabsInfo: action.tabsInfo,
            };

        default:
            return state;
    }

}

export default tabs;
