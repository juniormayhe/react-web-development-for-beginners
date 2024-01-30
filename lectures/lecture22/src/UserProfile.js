import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { ThemeContext } from "./ThemeProvider";

function UserProfile() {
    const auth = useContext(AuthContext);
    const theme = useContext(ThemeContext);

    const renderStatus = () => {
        const statusText = auth.isLoggedIn ? "Logged In" : "Logged Out";
        const statusColor = auth.isLoggedIn ? "green" : "gray";

        return (
            <strong>
                <span style={{ color: statusColor }}>{statusText}</span>
            </strong>
        );
    };

    const handleLoginClick = () => {
        auth.login();
    };

    const handleLogoutClick = () => {
        auth.logout();
    };

    const handleThemeToggle = () => {
        theme.toggleTheme();
    };

    const themeStyles = {
        color: theme.theme === "dark" ? "white" : "black",
        backgroundColor: theme.theme === "dark" ? "black" : "white",
        padding: "0.1em 1em 2em",
        borderRadius: "0.5em",
    };

    return (
        <div style={themeStyles}>
            <h2>User Profile</h2>
            <p>Status: {renderStatus()}</p>
            <div style={{ display: "inline", width: "100%" }}>
                <button onClick={handleLoginClick}>Login</button>{" "}
                <button onClick={handleLogoutClick}>Logout</button>
            </div>
            <p>
                Theme: <strong>{theme.theme}</strong>
            </p>
            <button onClick={handleThemeToggle}>Toggle Theme</button>
        </div>
    );
}

export default UserProfile;
