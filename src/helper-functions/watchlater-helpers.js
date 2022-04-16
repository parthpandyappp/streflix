import axios from "axios";

const getWatchLaterData = async (dispatch) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "GET",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: "/api/user/watchlater",
        });
        dispatch({ type: "SET_WATCHLATER_DATA", payload: response.data.watchlater });
    } catch (error) {
        console.log(error);
    }
};

const addToWatchLater = async (videoObj, boolFunc, notify) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");

        await axios({
            method: "POST",
            headers: {
                authorization: encodedToken,
            },
            url: "/api/user/watchlater",
            data: JSON.stringify({
                video: videoObj,
            }),
        });

        boolFunc();
        notify();
    } catch (error) {
        console.log(error);
    }
};

const removeFromWatchLater = async (id, boolFunc, notify) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");
        await axios({
            method: "DELETE",
            headers: {
                authorization: encodedToken,
            },
            url: `/api/user/watchlater/${id}`,
        });

        boolFunc();
        notify();
    } catch (error) {
        console.log(error);
    }
};

export { addToWatchLater, removeFromWatchLater, getWatchLaterData }