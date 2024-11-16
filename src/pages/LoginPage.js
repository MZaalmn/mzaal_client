// src/pages/LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        usernameOrEmail: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/users/login",
                formData
            );
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("userRole", response.data.role);
            // navigate("/");
            window.location.href = "http://localhost:3001/";
        } catch (err) {
            setError("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
            console.error(
                "Login Error: ",
                err.response ? err.response.data : err
            );
        }
    };

    return (
        <div className="w-[50%] mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                    </label>
                    <input
                        type="text"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        required
                        placeholder="Username Or Email"
                    />
                </div>
                <div className="mb-5">
                    <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
