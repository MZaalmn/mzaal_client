import React, { useEffect, useState } from "react";
import HallsSection from "../components/halls/HallsSection";
import SaledHallsSection from "../components/saledHalls/saledHallsSection";
import NewsSection from "../components/news/NewsSection";
import AddNewsSection from "../components/news/AddNewsSection";

const HomePage = () => {
    const [role, setRole] = useState("");

    useEffect(() => {
        const userString = localStorage.getItem("user");
        try {
            const user = userString ? JSON.parse(userString) : null;
            setRole(user?.role || "guest");
        } catch (error) {
            console.error("Error parsing user from localStorage", error);
            setRole("guest");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("Songoson_Ajliin_ID");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="w-full mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold">
                Welcome {role.charAt(0).toUpperCase() + role.slice(1)}
            </h1>
            <p className="text-xl mt-5">
                {/* Hi {role.charAt(0).toUpperCase() + role.slice(1)}! */}
            </p>
            {/* {role !== "guest" && (
                <button
                    onClick={handleLogout}
                    className="mt-5 bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>
            )} */}
            <SaledHallsSection />
            <HallsSection />
            <AddNewsSection />
            <NewsSection />
        </div>
    );
};

export default HomePage;
