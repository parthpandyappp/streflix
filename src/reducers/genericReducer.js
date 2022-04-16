const genericReducer = (state, action) => {
    switch (action.type) {
        case "SET_WATCHLATER_DATA":
            return { ...state, watchLater: action.payload };
        case "SET_HISTORY_DATA":
            return { ...state, watchHistory: action.payload };
        case "SET_LIKED_DATA":
            return { ...state, Liked: action.payload };
        case "SET_PLAYLIST_DATA":
            return { ...state, playlist: action.payload };
        case "UPDATE_PLAYLIST_DATA":
            return {
                ...state,
                playlist: state.playlist.map((pl) =>
                    pl._id === action.payload._id ? action.payload : pl
                ),
            };
        default:
            return state;
    }
};

export { genericReducer };