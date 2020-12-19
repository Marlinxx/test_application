import * as actions from '../acitonTypes';
import updateState from '../../utils/updateState';

const initialState = {
    records: [],
    activeRecords: 0,
    inActiveRecords: 0,
    isLoading: false,
    isError: false,
    errorMessage: null
}

const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_RECORDS: return updateState(state, { records: action.payload })
        case actions.SET_IS_LOADING: return updateState(state, { isLoading: action.payload })
        case actions.SET_IS_ERROR: return updateState(state, { isError: action.payload })
        case actions.SET_ERROR_MESSAGE: return updateState(state, { errorMessage: action.payload })
        case actions.SET_ANALYTICS: return updateState(state, { ...action.payload })
        default: return state;
    }
}

export default recordReducer;