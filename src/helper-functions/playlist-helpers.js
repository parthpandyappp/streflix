import axios from "axios"

const getPlaylistData = async (dispatch) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "GET",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: "/api/user/playlists",
        });
        dispatch({ type: "SET_PLAYLIST_DATA", payload: response.data.playlists });
    } catch (error) {
        console.log(error);
    }
};

const removeFromPlaylist = async (videoId, playlistId, dispatch, notify) => {
    try {
        console.log(videoId, playlistId)
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "DELETE",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: `/api/user/playlists/${playlistId}/${videoId}`,
        });
        dispatch({ type: "UPDATE_PLAYLIST_DATA", payload: response.data.playlist });
        notify();
    } catch (error) {
        console.log(error);
    }
};


const postNewPlaylist = async (playlistObj, dispatch, notify) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "POST",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: "/api/user/playlists",
            data: JSON.stringify({
                playlist: playlistObj,
            }),
        });
        console.log(response)
        dispatch({ type: "SET_PLAYLIST_DATA", payload: response.data.playlists });
        notify();
    } catch (error) {
        console.log(error);
    }
};

const postVideoToPlaylist = async (id, dispatch, videoObj, notify) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "POST",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: `/api/user/playlists/${id}`,
            data: JSON.stringify({
                video: videoObj,
            }),
        });
        console.log(response)
        dispatch({ type: "UPDATE_PLAYLIST_DATA", payload: response.data.playlist });
        notify();
    } catch (error) {
        console.log(error);
    }
};

const removePlaylist = async (id, dispatch, notify) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "Delete",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: `/api/user/playlists/${id}`,
        });
        dispatch({ type: "SET_PLAYLIST_DATA", payload: response.data.playlists });
        notify();
    } catch (error) {
        console.log(error);
    }
}
export { getPlaylistData, removeFromPlaylist, postNewPlaylist, postVideoToPlaylist, removePlaylist };