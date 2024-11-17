import React, { useState } from "react";

const ForgotPassword = () => {
    const [step, setStep] = useState(2); // Tracks the current step
    const [newPassword, setNewPassword] = useState(""); // Tracks the new password
    const [confirmPassword, setConfirmPassword] = useState(""); // Tracks the confirm password
    const [error, setError] = useState(""); // Tracks errors
    const [success, setSuccess] = useState(false); // Tracks success state

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setError("");
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError("");
    };

    const handleSubmit = () => {
        if (newPassword.length < 8) {
            setError("Шинэ нууц үг 8 тэмдэгтээс дээш байх ёстой.");
        } else if (newPassword !== confirmPassword) {
            setError("Шинэ нууц үг болон давтан оруулсан нууц үг таарахгүй байна.");
        } else {
            setError("");
            setSuccess(true);
            setStep(3);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f7f7f7",
            }}
        >
            <div
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
            >
                {step === 2 && (
                    <div>
                        <h3>Шинэ нууц үг үүсгэх</h3>
                        <p style={{ marginBottom: "20px" }}>
                            Та тоо, үсэг, тэмдэгт холилдуулж шинэ нууц үг үүсгэнэ үү!
                        </p>
                        <input
                            type="password"
                            placeholder="Шинэ нууц үг"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Шинэ нууц үгээ дахин оруулна уу"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                        {error && (
                            <p
                                style={{
                                    color: "red",
                                    marginBottom: "10px",
                                    fontSize: "14px",
                                }}
                            >
                                ⚠ {error}
                            </p>
                        )}
                        <button
                            onClick={handleSubmit}
                            style={{
                                backgroundColor: "#ff4500",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "4px",
                                border: "none",
                                cursor: "pointer",
                                width: "100%",
                            }}
                        >
                            Батлах
                        </button>
                    </div>
                )}
                {step === 3 && success && (
                    <div>
                        <h3 style={{ color: "#3c763d", marginBottom: "20px" }}>
                            Таны нууц үг өөрчлөгдлөө ✔
                        </h3>
                        <div
                            style={{
                                backgroundColor: "#dff0d8",
                                border: "1px solid #d6e9c6",
                                color: "#3c763d",
                                padding: "10px",
                                borderRadius: "4px",
                                marginBottom: "20px",
                            }}
                        >
                            <p>Амжилттай!</p>
                        </div>
                        <button
                            style={{
                                backgroundColor: "#ff4500",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "4px",
                                border: "none",
                                cursor: "pointer",
                                width: "100%",
                            }}
                            onClick={() => alert("Нэвтрэх хэсэг рүү шилжих")}
                        >
                            Нэвтрэх
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
