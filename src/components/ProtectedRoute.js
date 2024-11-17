import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    const userRole = localStorage.getItem("userRole");

    if (!authToken && userRole === "guest") {
        return children;
    }
    if (!authToken || userRole === "guest") {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
