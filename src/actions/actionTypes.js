const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
});

export const API = 'API';
export const GET_TABS_INFO = asyncActionType('GET_TABS_INFO');