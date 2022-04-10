const genericReducer = (state, action) => {
    switch (action.type) {
        case "SET_WATCHLATER_DATA":
            return { ...state, watchLater: action.payload };
        case "SET_HISTORY_DATA":
            return { ...state, watchHistory: action.payload };
        default:
            return state;
    }
};

export { genericReducer };