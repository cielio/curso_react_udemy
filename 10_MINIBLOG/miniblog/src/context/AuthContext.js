// creating Auth Context to identify through Firebase which user is logged in the app
import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}