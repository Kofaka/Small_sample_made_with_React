import axios from 'axios';
import {getTabsInfo} from './actionCreators';

/**
 *
 * @param source {String}
 * @param dispatchedAction {Function}
 * @returns {Function}
 */
export const callApi = (source, dispatchedAction) => {
    return function (dispatch) {
        return axios.get(source)
            .then(
                response => response.data,
                error => console.log('An error occurred.', error),
            )
            .then(
                data => dispatch(dispatchedAction(data))
            )
    }
};

export const fetchTabsInfo = () => callApi('./tabs.json', getTabsInfo);
