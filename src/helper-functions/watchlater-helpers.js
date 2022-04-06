import axios from "axios";

const addToWatchLater = async (videoObj, boolFunc) => {
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
    } catch (error) {
        console.log(error);
    }
};

const removeFromWatchLater = async (id, boolFunc) => {
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
        // dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
    } catch (error) {
        console.log(error);
    }
};

export { addToWatchLater, removeFromWatchLater }