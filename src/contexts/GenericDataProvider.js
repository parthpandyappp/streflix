import axios from "axios";
import { useAuth } from "./AuthProvider";
import { genericReducer } from "../reducers/";

import {
    useContext,
    createContext,
    useEffect,
    useReducer,
    useState,
} from "react";

const DataContext = createContext(null);

function GenericDataProvider({ children }) {
    const { user } = useAuth();

    const [state, dispatch] = useReducer(genericReducer, { watchLater: [], watchHistory: [] });
    const [boolSwitch, setBoolSwitch] = useState(false);

    const getWatchLaterData = async () => {
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

    const getHistoryData = async () => {
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

    useEffect(() => {
        if (user) {
            getWatchLaterData();
            getHistoryData();
        }
    }, [boolSwitch, user]);

    const boolFunc = () => setBoolSwitch((prev) => !prev);

    return (
        <DataContext.Provider value={{ state, dispatch, boolFunc }}>
            {children}
        </DataContext.Provider>
    );
}

const useGenericData = () => useContext(DataContext);

export { useGenericData, GenericDataProvider };
