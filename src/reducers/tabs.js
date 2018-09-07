import {GET_TABS_INFO} from '../actions/actionTypes';

const initialState = {
    tabsInfo: [],
    pending: false,
};

function tabs(state = initialState, action) {
    switch (action.type) {
        case GET_TABS_INFO.PENDING:
            return {
                ...state,
                pending: true,
            };

        case GET_TABS_INFO.SUCCESS:
            return {
                ...state,
                tabsInfo: action.payload,
                pending: false,
            };

        case GET_TABS_INFO.FAILURE:
            return {
                ...state,
                pending: false,
            };

        default:
            return state;
    }

}

export default tabs;
