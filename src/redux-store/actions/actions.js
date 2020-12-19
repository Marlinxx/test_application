import * as actions from '../acitonTypes';
import axios from 'axios';

import * as API from '../../utils/endpoints';
import months from '../../utils/monthConst';

export const onGenerateData = () => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.GENERATE_DATA}`;
        dispatch(setIsLoading(true));
        axios.get(url).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(false));
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

export const onResetData = () => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.DELETE_ALL}`;
        dispatch(setIsLoading(true));
        axios.get(url).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(false));
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

export const onDeleteData = () => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.SET_INACTIVE_ALL}`;
        dispatch(setIsLoading(true));
        axios.get(url).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(false));
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

export const onDeleteDataById = (id) => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.SET_INACTIVE}`;
        dispatch(setIsLoading(true));
        const params = {
            id: id
        }
        axios.post(url, params).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(false));
            dispatch(getData());
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

export const onExpireData = () => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.SET_EXPIRY_ALL}`;
        dispatch(setIsLoading(true));
        axios.get(url).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(false));
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

export const onExpireDataById = (id) => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.SET_EXPIRY}`;
        dispatch(setIsLoading(true));
        const params = {
            id: id
        }
        axios.post(url, params).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(false));
            dispatch(getData());
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

export const getData = () => {
    return dispatch => {
        const url = `${API.HOST}${API.ENDPOINTS.GET_DATA}`;
        dispatch(setIsLoading(true));
        axios.get(url).then(res => {
            dispatch(setIsLoading(false));
            dispatch(setRecords(res.data.data));
            setAnalytics(dispatch, res.data.data);
            dispatch(setIsError(false));
        }).catch(res => {
            dispatch(setIsLoading(false));
            dispatch(setIsError(true));
            dispatch(setErrorMessage('Something went wrong'));
        })
    }
}

const setAnalytics = (dispatch, records) => {
    let activeRecords = records.filter(el => el.ActiveIndicator === 'Y').length;
    let inactiveRecords = records.length - activeRecords;
    let stats = [];
    let groupStats = records.reduce(function (r, a) {
        if(a.ActiveIndicator === 'Y') {
            let month = months[new Date(a.Effective_date).getMonth()];
            r[month] = r[month] || 0;
            r[month]++;
        }
        return r;
    }, Object.create(null));

    months.forEach(month => {
        stats.push({
            month: month,
            y: groupStats[month] || 0
        })
    });;

    dispatch(setRecordAnalytics({
        activeRecords: activeRecords,
        inActiveRecords: inactiveRecords,
        stats: stats
    }))
}

export const setRecords = (records) => {
    return {
        type: actions.SET_RECORDS,
        payload: records
    }
}

export const setRecordAnalytics = (data) => {
    return {
        type: actions.SET_ANALYTICS,
        payload: data
    }
}

export const setIsError = (isError) => {
    return {
        type: actions.SET_IS_ERROR,
        payload: isError
    }
}

export const setErrorMessage = (error) => {
    return {
        type: actions.SET_ERROR_MESSAGE,
        payload: error
    }
}

export const setIsLoading = (isLoading) => {
    return {
        type: actions.SET_IS_LOADING,
        payload: isLoading
    }
}