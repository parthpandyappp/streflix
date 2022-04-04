import { useContext, createContext, useEffect, useState } from "react";

const authContext = createContext(null);

function AuthProvider({ children }) {
    const [boolSwitch, setSwitch] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userData")));
    }, [boolSwitch]);

    return (
        <authContext.Provider value={{ user, boolFunc: setSwitch }}>
            {children}
        </authContext.Provider>
    );
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
