// src/pages/RegisterPage.js
import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Нууц үг таарахгүй байна.");
            return;
        }
        if (!termsAccepted) {
            setMessage("Үйлчилгээний нөхцлийг зөвшөөрнө үү.");
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/register",
                {
                    username,
                    email,
                    password,
                }
            );
            setMessage(
                `User ${response.data.username} registered successfully!`
            );
        } catch (error) {
            setMessage(`Error: ${error.response.data.message}`);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <div className="flex justify-center space-x-4 border-b pb-4">
                        <button className="text-gray-500 focus:outline-none">
                            Нэвтрэх
                        </button>
                        <button className="text-orange-500 font-semibold border-b-2 border-orange-500 focus:outline-none">
                            Бүртгүүлэх
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input
                            type="text"
                            placeholder="Нэр"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Хаяг"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Нууц үг"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Нууц үгээ баталгаажуулна уу"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) =>
                                    setTermsAccepted(e.target.checked)
                                }
                                className="mr-2"
                            />
                            <label className="text-sm text-gray-600">
                                Зөвшөөрч байна{" "}
                                <a href="#" className="text-blue-500 underline">
                                    Үйлчилгээний нөхцөл
                                </a>
                                .
                            </label>
                        </div>
                        <Button
                            variant="primary"
                            className="w-full bg-red-500 hover:bg-red-600 mt-4"
                            type="submit"
                        >
                            SIGN UP
                        </Button>
                    </form>
                    {message && (
                        <p className="mt-4 text-center text-sm text-red-500">
                            {message}
                        </p>
                    )}
                    <div className="mt-4 text-center">
                        <p className="text-gray-500 text-sm">or</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg">
                                <img
                                    src="/path-to-google-icon"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                <span>Google эрхээр нэвтрэх</span>
                            </button>
                            <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg">
                                <img
                                    src="/path-to-apple-icon"
                                    alt="Apple"
                                    className="w-5 h-5"
                                />
                                <span>Apple эрхээр нэвтрэх</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Register User</h1>
                <p className="bg-amber-300 font-bold italic text-4xl w-full text-center">
                    Hi
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button variant="primary" className="mt-2" type="submit">
                        Register
                    </Button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
};

export default RegisterPage;
