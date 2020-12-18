const updateState = (state, update) => {
    return {
        ...state,
        ...update
    }
}

export default updateState;