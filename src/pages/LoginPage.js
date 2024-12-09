import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import ButtonComponent from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        usernameOrEmail: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            navigate("/");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/auth/login",
                formData
            );
            console.log(response.data.user.role);
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("userRole", response.data.user.role);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("userEmail", formData.usernameOrEmail);

            if (response.data.user.role === "owner") {
                navigate("/zaal_Ezemshigch_Nevternsii_Daraa");
            } else {
                navigate("/");
            }
        } catch (err) {
            toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
            setError("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
            console.error(
                "Login Error: ",
                err.response ? err.response.data : err
            );
        }
    };

    return (
        <div className="flex justify-center items-center gap-10 my-16">
            <div className="w-full max-w-md flex flex-col items-center bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 dark:text-gray-100">
                    Нэвтрэх
                </h2>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="usernameOrEmail"
                            className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200"
                        >
                            И-мэйл
                        </label>
                        <input
                            type="text"
                            name="usernameOrEmail"
                            id="usernameOrEmail"
                            value={formData.usernameOrEmail}
                            onChange={handleChange}
                            // required
                            placeholder="Хэрэглэгчийн нэр эсвэл и-мэйл"
                            className={`w-full px-4 py-2 text-gray-800 bg-gray-50 border ${
                                error ? "input-error" : "border-gray-300"
                            } rounded-lg focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600`}
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200"
                        >
                            Нууц үг
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            // required
                            placeholder="Нууц үг"
                            className={`w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600 ${
                                error ? "input-error" : "border-gray-300"
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-10 right-5 flex items-center text-gray-600"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="my-6 text-center">
                        {error && (
                            <p className="text-red-500 text-sm">{error}!!!</p>
                        )}
                    </div>
                    <p className="text-center my-4 text-sm text-gray-600">
                        Нууц үгээ мартсан уу?{" "}
                        <Link
                            className="text-orange hover:underline"
                            to="/forgot-password"
                        >
                            Сэргээх.{" "}
                        </Link>
                    </p>
                    <button
                        type="submit"
                        className="w-full py-3 text-white font-medium text-lg rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 focus:ring-4 focus:ring-orange-300 focus:outline-none dark:focus:ring-orange-800"
                    >
                        Нэвтрэх
                    </button>
                    <p className="text-center my-4 text-sm text-gray-600">
                        Хэрэв та бүртгэлгүй бол{" "}
                        <Link
                            className="text-orange hover:underline"
                            to="/register"
                        >
                            энд дарж{" "}
                        </Link>
                        бүртгүүлнэ үү.
                    </p>
                </form>
            </div>

            <div className="border-r-2 h-96"></div>

            <div className="w-full max-w-md flex flex-col items-center bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800">
                <div className="flex w-full flex-col justify-center gap-3">
                    <ButtonComponent
                        icon={<FcGoogle className="text-lg" />}
                        className="bg-transparent text-black hover:bg-transparent border rounded-2xl hover:bg-slate-100 transition hover:shadow-sm"
                    >
                        Google эрхээр нэвтрэх
                    </ButtonComponent>
                    <ButtonComponent
                        icon={<FaFacebook className="text-lg text-blue-500" />}
                        className="bg-transparent text-black hover:bg-transparent border rounded-2xl hover:bg-slate-100 transition hover:shadow-sm"
                    >
                        Facebook эрхээр нэвтрэх
                    </ButtonComponent>
                    <ButtonComponent
                        icon={<FaPhoneAlt className="text-lg text-orange" />}
                        className="bg-transparent text-black hover:bg-transparent border rounded-2xl hover:bg-slate-100 transition hover:shadow-sm"
                    >
                        Гар утасны дугаараар нэвтрэх
                    </ButtonComponent>
                </div>
            </div>
            <ToastContainer position="top-left" autoClose={1000} />
        </div>
    );
};

export default LoginPage;
