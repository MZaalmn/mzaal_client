import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // Tracks the current step
    const [input, setInput] = useState(""); // Tracks the email/phone input
    const [newPassword, setNewPassword] = useState(""); // Tracks the new password
    const [confirmPassword, setConfirmPassword] = useState(""); // Tracks the confirm password
    const [error, setError] = useState(""); // Tracks errors

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setError("");
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setError("");
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError("");
    };

    const handleSubmitStep1 = () => {
        // Simulate API call for email/phone validation
        if (input === "valid@example.com" || input === "valid_phone_number") {
            setStep(2);
        } else {
            setError(
                "Та бүртгэлгүй цахим хаяг эсвэл утасны дугаар оруулсан байна."
            );
            toast.error("Бүртгэлгүй цахим хаяг эсвэл утасны дугаар.");
        }
    };

    const handleSubmitStep2 = () => {
        if (newPassword.length < 8) {
            setError("Шинэ нууц үг 8 тэмдэгтээс дээш байх ёстой.");
            toast.error("Шинэ нууц үг 8 тэмдэгтээс дээш байх ёстой.");
        } else if (newPassword !== confirmPassword) {
            setError(
                "Шинэ нууц үг болон давтан оруулсан нууц үг таарахгүй байна."
            );
            toast.error("Нууц үг таарахгүй байна.");
        } else {
            setError("");
            setStep(3);
            toast.success("Нууц үг амжилттай өөрчлөгдлөө!");
        }
    };

    return (
        <div className="flex justify-center items-center mt-16">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                {step === 1 && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Нууц үгээ мартсан уу?
                        </h3>
                        <p className="mb-4">
                            Таны бүртгэлтэй цахим хаяг эсвэл утасны дугаарыг
                            оруулна уу:
                        </p>
                        <input
                            type="text"
                            placeholder="Цахим хаяг эсвэл утасны дугаар"
                            value={input}
                            onChange={handleInputChange}
                            className={`w-full p-3 mb-4 border border-gray-300 rounded-lg ${
                                error ? "input-error" : "border-gray-300"
                            }`}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mb-4">{error}</p>
                        )}
                        <button
                            onClick={handleSubmitStep1}
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Илгээх
                        </button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Шинэ нууц үг үүсгэх
                        </h3>
                        <p className="mb-4">
                            Та тоо, үсэг, тэмдэгт холилдуулж шинэ нууц үг
                            үүсгэнэ үү!
                        </p>
                        <input
                            type="password"
                            placeholder="Шинэ нууц үг"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            className={`w-full p-3 mb-4 border border-gray-300 rounded-lg ${
                                error ? "input-error" : "border-gray-300"
                            }`}
                        />
                        <input
                            type="password"
                            placeholder="Шинэ нууц үгээ дахин оруулна уу"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className={`w-full p-3 mb-4 border border-gray-300 rounded-lg ${
                                error ? "input-error" : "border-gray-300"
                            }`}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mb-4">{error}</p>
                        )}
                        <button
                            onClick={handleSubmitStep2}
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Батлах
                        </button>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h3 className="text-xl font-semibold text-green-600 mb-4">
                            Таны нууц үг өөрчлөгдлөө ✔
                        </h3>
                        <div className="bg-green-100 border border-green-300 text-green-700 p-3 mb-4 rounded-lg">
                            <p>Амжилттай!</p>
                        </div>
                        <button
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
                            onClick={navigate("/login")}
                        >
                            Нэвтрэх
                        </button>
                    </div>
                )}
            </div>
            <ToastContainer position="top-left" autoClose={1000} />
        </div>
    );
};

export default ForgotPassword;
