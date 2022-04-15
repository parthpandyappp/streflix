import axios from "axios"

const getLikedData = async (dispatch) => {
    try {
        const encodedToken = localStorage.getItem("token");
        const response = await axios({
            method: "GET",
            headers: {
                authorization: encodedToken, // passing token as an authorization header
            },
            url: "/api/user/likes",
        });
        dispatch({ type: "SET_LIKED_DATA", payload: response.data.likes });
    } catch (error) {
        console.log(error);
    }
};


const addToLikes = async (videoObj, boolFunc) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");

        await axios({
            method: "POST",
            headers: {
                authorization: encodedToken,
            },
            url: "/api/user/likes",
            data: JSON.stringify({
                video: videoObj,
            }),
        });

        boolFunc();
    } catch (error) {
        console.log(error);
    }
};

const removeFromLikes = async (id, boolFunc) => {
    try {
        // token required as an authorization header
        const encodedToken = localStorage.getItem("token");
        await axios({
            method: "DELETE",
            headers: {
                authorization: encodedToken,
            },
            url: `/api/user/likes/${id}`,
        });

        boolFunc();
    } catch (error) {
        console.log(error);
    }
};

export { addToLikes, removeFromLikes, getLikedData };