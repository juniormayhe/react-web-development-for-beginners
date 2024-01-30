import React, { createContext, useState } from "react";

// Context for user authentication
export const AuthContext = createContext();

// Provider for authentication
function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        // Simulate login logic
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Simulate logout logic
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
