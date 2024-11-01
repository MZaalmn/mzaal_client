// src/pages/RegisterPage.js
import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
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
    );
};

export default RegisterPage;
