export const GET_TABS_INFO = 'GET_TABS_INFO';

export function getTabsInfo(payload) {
    return {
        type: GET_TABS_INFO,
        tabsInfo: payload
    }
}
