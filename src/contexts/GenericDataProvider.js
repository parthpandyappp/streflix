import { useAuth } from "./AuthProvider";
import { genericReducer } from "../reducers/";
import { getHistoryData, getWatchLaterData, getLikedData, getPlaylistData } from "../helper-functions";

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

    const [state, dispatch] = useReducer(genericReducer, { watchLater: [], watchHistory: [], Liked: [], playlist: [] });
    const [boolSwitch, setBoolSwitch] = useState(false);

    useEffect(() => {
        if (user) {
            getWatchLaterData(dispatch);
            getHistoryData(dispatch);
            getLikedData(dispatch);
            getPlaylistData(dispatch);
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
