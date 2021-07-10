import React, { useEffect, useState } from "react";
import App from './App';

export const AuthContext  = React.createContext();

export const AuthProvider = ({ children }) =>{

    const [currentUser,setCurrentUser] = useState(null);

    useEffect(() =>{
        App.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    return(
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    );
};