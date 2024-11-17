import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        usernameOrEmail: "",
        password: "",
        rememberMe: false,
    });
    const [error, setError] = useState("");

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            navigate("/");
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
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
            navigate("/");
        } catch (err) {
            setError("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
            console.error(
                "Login Error: ",
                err.response ? err.response.data : err
            );
        }
    };

    const handleGoogleLogin = () => {
        // Google OAuth руу чиглүүлэх
        window.location.href = "http://localhost:8000/auth/google";
    };

    const handleFacebookLogin = () => {
        // Facebook OAuth руу чиглүүлэх
        window.location.href = "http://localhost:8000/auth/facebook";
    };

    return (
        <div className="w-[50%] mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Нэвтрэх
            </h2>
            {error && (
                <p className="text-red-500 text-center mb-4 font-medium">
                    {error}
                </p>
            )}
            {/* Social login buttons */}
            <div className="space-y-3 mb-6">
                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-blue-600"
                >
                    Google эрхээр нэвтрэх
                </button>
                <button
                    onClick={handleFacebookLogin}
                    className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-blue-800"
                >
                    Facebook эрхээр нэвтрэх
                </button>
                <button
                    className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-gray-600"
                >
                    Гар утасны дугаараар нэвтрэх
                </button>
            </div>
            <div className="text-center text-gray-500 font-medium my-4">
                <span>Эсвэл</span>
            </div>
            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email хаяг
                    </label>
                    <input
                        type="text"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        required
                        placeholder="Email хаяг"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Нууц үг
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Нууц үг"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-gray-700">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Remember me
                    </label>
                    <a
                        href="/forgot-password"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Нууц үгээ мартсан уу?
                    </a>
                </div>
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-medium shadow-lg hover:bg-red-600"
                    >
                        Нэвтрэх
                    </button>
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={() => navigate("/register")}
                        className="w-full border border-gray-300 py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Бүртгүүлэх
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
