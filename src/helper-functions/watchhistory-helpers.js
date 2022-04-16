import axios from "axios";

const getHistoryData = async (dispatch) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "GET",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: "/api/user/history",
        });
        dispatch({ type: "SET_HISTORY_DATA", payload: response.data.history });
    } catch (error) {
        console.log(error);
    }
};

const addToWatchHistory = async (videoObj, boolFunc, notify) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");

        await axios({
            method: "POST",
            headers: {
                authorization: encodedToken,
            },
            url: "/api/user/history",
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

const removeFromHistory = async (id, boolFunc, notify) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");
        await axios({
            method: "DELETE",
            headers: {
                authorization: encodedToken,
            },
            url: `/api/user/history/${id}`,
        });

        boolFunc();
        notify();
    } catch (error) {
        console.log(error);
    }
};

const removeAllFromHistory = async (boolFunc, notify) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");
        await axios({
            method: "DELETE",
            headers: {
                authorization: encodedToken,
            },
            url: `/api/user/history/all`,
        });

        boolFunc();
        notify();
    } catch (error) {
        console.log(error);
    }
};


export { addToWatchHistory, removeFromHistory, removeAllFromHistory, getHistoryData }
