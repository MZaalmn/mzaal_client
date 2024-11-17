import { Navigate } from "react-router-dom";

const RedirectIfLoggedIn = ({ children }) => {
    const authToken = localStorage.getItem("authToken");

    // If user is logged in, redirect to home page (or another route)
    if (authToken) {
        return <Navigate to="/" />;
    }

    // If user is not logged in, allow access to the registration page
    return children;
};

export default RedirectIfLoggedIn;
