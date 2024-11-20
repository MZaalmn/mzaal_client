import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMdBasketball } from "react-icons/io";
import ButtonComponent from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [requirements, setRequirements] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const validatePasswordRequirements = (password) => {
        setRequirements({
            length: password.length >= 8 && password.length <= 16,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            specialChar: /[@$!%*?&]/.test(password),
        });
    };

    const validateForm = () => {
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = "Хэрэглэгчийн нэр оруулна уу.";
        } else if (formData.username.length < 3) {
            validationErrors.username =
                "Хэрэглэгчийн нэр 3-аас дээш тэмдэгт байх ёстой.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            validationErrors.email = "И-Мэйл хаяг оруулна уу.";
        } else if (!emailRegex.test(formData.email)) {
            validationErrors.email = "Буруу и-мэйл хаяг.";
        }

        if (!formData.password) {
            validationErrors.password = "Нууц үг оруулна уу.";
        } else if (
            !(
                requirements.length &&
                requirements.uppercase &&
                requirements.lowercase &&
                requirements.number &&
                requirements.specialChar
            )
        ) {
            validationErrors.password = "Нууц үг шаардлагыг хангахгүй байна.";
        }

        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = "Нууц үгийг баталгаажуулна уу.";
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = "Нууц үг таарахгүй байна.";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "password") {
            validatePasswordRequirements(value);
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await axios.post("http://localhost:8000/users/register", formData);
            toast.success("Амжилттай бүртгэгдлээ!");
            navigate("/login");
        } catch (err) {
            setErrors({
                server: "Хэрэглэгч бүртгэлтэй байна эсвэл серверийн алдаа.",
            });
            toast.error("Бүртгэл амжилтгүй боллоо. Дахин оролдож үзнэ үү!");
        }
    };

    return (
        <div className="flex justify-center items-center gap-10 mt-16">
            <div className="w-full max-w-md flex flex-col items-center bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 dark:text-gray-100">
                    Бүртгүүлэх
                </h2>
                <form className="w-full" onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200"
                        >
                            Хэрэглэгчийн нэр
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Хэрэглэгчийн нэр оруулна уу"
                            className={`w-full px-4 py-2 text-gray-800 bg-gray-50 border rounded-lg focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600 ${
                                errors.username
                                    ? "input-error"
                                    : "border-gray-300"
                            }`}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200"
                        >
                            И-Мэйл
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="И-Мэйл оруулна уу"
                            className={`w-full px-4 py-2 text-gray-800 bg-gray-50 border rounded-lg focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600 ${
                                errors.email ? "input-error" : "border-gray-300"
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-3 relative">
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
                            placeholder="Нууц үг оруулна уу"
                            className={`w-full px-4 py-2 text-gray-800 bg-gray-50 border rounded-lg focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600 ${
                                errors.password
                                    ? "input-error"
                                    : "border-gray-300"
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-10 right-5 flex items-center text-gray-600"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    {/* Password Validation */}
                    {formData.password ? (
                        <div className="mb-6">
                            <div className="text-sm ml-4 mt-2">
                                <p
                                    className={`flex items-center gap-2 ${
                                        requirements.length
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }
                                `}
                                >
                                    <div>
                                        <IoMdBasketball />
                                    </div>{" "}
                                    8-16 тэмдэгт
                                </p>
                                <p
                                    className={`flex items-center gap-2 ${
                                        requirements.uppercase
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }
                                `}
                                >
                                    <div>
                                        <IoMdBasketball />
                                    </div>
                                    Нэг том үсэг агуулсан байх
                                </p>
                                <p
                                    className={`flex items-center gap-2 ${
                                        requirements.lowercase
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }
                                `}
                                >
                                    <div>
                                        <IoMdBasketball />
                                    </div>{" "}
                                    Нэг жижиг үсэг агуулсан байх
                                </p>
                                <p
                                    className={`flex items-center gap-2 ${
                                        requirements.number
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }
                                `}
                                >
                                    <div>
                                        <IoMdBasketball />
                                    </div>{" "}
                                    Нэг тоо агуулсан байх
                                </p>
                                <p
                                    className={`flex gap-2 ${
                                        requirements.specialChar
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }
                                `}
                                >
                                    <div>
                                        <IoMdBasketball />
                                    </div>{" "}
                                    Тусгай тэмдэгтүүдийн аль нэгийг агуулсан
                                    байх (@$!%*?&)
                                </p>
                            </div>
                        </div>
                    ) : null}

                    {/* Confirm Password Field */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200"
                        >
                            Нууц үг баталгаажуулах
                        </label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Нууц үг давтан оруулна уу"
                            className={`w-full px-4 py-2 text-gray-800 bg-gray-50 border rounded-lg focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600 ${
                                errors.confirmPassword
                                    ? "input-error"
                                    : "border-gray-300"
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute top-10 right-5 flex items-center text-gray-600"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={() => {
                            if (errors) {
                                toast.error(
                                    "Бүртгэл амжилтгүй боллоо. Дахин оролдож үзнэ үү!"
                                );
                            } else {
                                handleSubmit();
                            }
                        }}
                        className="w-full py-3 text-white font-medium text-lg rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 focus:ring-4 focus:ring-orange-300 focus:outline-none dark:focus:ring-orange-800"
                    >
                        Бүртгүүлэх
                    </button>

                    <p className="text-center my-4 text-sm text-gray-600">
                        Аль хэдийн бүртгэлтэй бол{" "}
                        <Link
                            className="text-orange hover:underline"
                            to="/login"
                        >
                            энд дарж{" "}
                        </Link>
                        нэвтэрнэ үү.
                    </p>

                    {/* Server Error */}
                    {errors.server && (
                        <p className="text-red-500 text-center mt-4">
                            {errors.server}
                        </p>
                    )}
                </form>
            </div>

            <div className="border-r-2 h-96"></div>

            <div className="w-full max-w-md flex flex-col items-center bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800">
                <div className="flex w-full flex-col justify-center gap-3">
                    <ButtonComponent
                        icon={<FcGoogle className="text-lg" />}
                        className="bg-transparent text-black hover:bg-transparent border rounded-2xl hover:bg-slate-100 transition hover:shadow-sm"
                    >
                        Google эрхээр бүртгүүлэх
                    </ButtonComponent>
                    <ButtonComponent
                        icon={<FaFacebook className="text-lg text-blue-500" />}
                        className="bg-transparent text-black hover:bg-transparent border rounded-2xl hover:bg-slate-100 transition hover:shadow-sm"
                    >
                        Facebook эрхээр бүртгүүлэх
                    </ButtonComponent>
                    <ButtonComponent
                        icon={<FaPhoneAlt className="text-lg text-orange" />}
                        className="bg-transparent text-black hover:bg-transparent border rounded-2xl hover:bg-slate-100 transition hover:shadow-sm"
                    >
                        Гар утасны дугаараар бүртгүүлэх
                    </ButtonComponent>
                </div>
            </div>
            <ToastContainer position="top-left" autoClose={1000} />
        </div>
    );
};

export default RegisterPage;
