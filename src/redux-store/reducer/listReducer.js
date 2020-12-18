import * as actions from '../actions/listActions';
import updateState from '../../utils/updateState';

const initialState = {
    records: [],
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
        default: return state;
    }
}

export default recordReducer;