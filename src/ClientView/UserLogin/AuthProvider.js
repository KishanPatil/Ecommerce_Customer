import { createContext,useState } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) { 
    const[isloggedIn , setIsLoggedIn] = useState(false);

    return <AuthContext.Provider value={{isloggedIn , setIsLoggedIn}}>
        {props.children}
    </AuthContext.Provider>
}