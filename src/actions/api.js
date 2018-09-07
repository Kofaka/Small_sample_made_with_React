import {API, GET_TABS_INFO} from './actionTypes';

/**
 *
 * @param payload {Object}
 */
export const callAPI = (payload) => ({
    type: API,
    payload
});

export const getTabsInfo = () => callAPI({
    url: './tabs.json',
    ...GET_TABS_INFO,
});
