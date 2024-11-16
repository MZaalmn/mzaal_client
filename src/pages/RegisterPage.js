// // src/pages/RegisterPage.js
// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Button from "../components/Button";
// const RegisterPage = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [termsAccepted, setTermsAccepted] = useState(false);
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setMessage("Нууц үг таарахгүй байна.");
//             return;
//         }
//         if (!termsAccepted) {
//             setMessage("Үйлчилгээний нөхцлийг зөвшөөрнө үү.");
//             return;
//         }
//         try {
//             const response = await axios.post(
//                 "http://localhost:8000/api/users/register",
//                 {
//                     username,
//                     email,
//                     password,
//                 }
//             );
//             setMessage(
//                 `User ${response.data.username} registered successfully!`
//             );
//         } catch (error) {
//             setMessage(`Error: ${error.response.data.message}`);
//         }
//     };

//     return (
//         <>
//             <div className="min-h-screen flex items-center justify-center bg-gray-100">
//                 <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                     <div className="flex justify-center space-x-4 border-b pb-4">
//                         <button className="text-gray-500 focus:outline-none">
//                             Нэвтрэх
//                         </button>
//                         <button className="text-orange-500 font-semibold border-b-2 border-orange-500 focus:outline-none">
//                             Бүртгүүлэх
//                         </button>
//                     </div>
//                     <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                         <input
//                             type="text"
//                             placeholder="Нэр"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email Хаяг"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                         <input
//                             type="password"
//                             placeholder="Нууц үг"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                         <input
//                             type="password"
//                             placeholder="Нууц үгээ баталгаажуулна уу"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required
//                         />
//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 checked={termsAccepted}
//                                 onChange={(e) =>
//                                     setTermsAccepted(e.target.checked)
//                                 }
//                                 className="mr-2"
//                             />
//                             <label className="text-sm text-gray-600">
//                                 Зөвшөөрч байна{" "}
//                                 <Link
//                                     href="#"
//                                     className="text-blue-500 underline"
//                                 >
//                                     Үйлчилгээний нөхцөл
//                                 </Link>
//                                 .
//                             </label>
//                         </div>
//                         <Button
//                             variant="primary"
//                             className="w-full bg-red-500 hover:bg-red-600 mt-4"
//                             type="submit"
//                         >
//                             SIGN UP
//                         </Button>
//                     </form>
//                     {message && (
//                         <p className="mt-4 text-center text-sm text-red-500">
//                             {message}
//                         </p>
//                     )}
//                     <div className="mt-4 text-center">
//                         <p className="text-gray-500 text-sm">or</p>
//                         <div className="flex justify-center space-x-4 mt-2">
//                             <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg">
//                                 <img
//                                     src="/path-to-google-icon"
//                                     alt="Google"
//                                     className="w-5 h-5"
//                                 />
//                                 <span>Google эрхээр нэвтрэх</span>
//                             </button>
//                             <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg">
//                                 <img
//                                     src="/path-to-apple-icon"
//                                     alt="Apple"
//                                     className="w-5 h-5"
//                                 />
//                                 <span>Apple эрхээр нэвтрэх</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h1>Register User</h1>
//                 <p className="bg-amber-300 font-bold italic text-4xl w-full text-center">
//                     Hi
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <Button variant="primary" className="mt-2" type="submit">
//                         Register
//                     </Button>
//                 </form>
//                 {message && <p>{message}</p>}
//             </div>
//         </>
//     );
// };

// export default RegisterPage;

// src/pages/RegisterPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "", // New state for the confirm password field
    });
    const [error, setError] = useState("");
    const [passwordMismatchError, setPasswordMismatchError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setPasswordMismatchError("Passwords do not match");
            return;
        }

        setPasswordMismatchError(""); // Clear any previous mismatch error

        try {
            // Send the registration request directly using axios
            await axios.post("http://localhost:8000/users/register", formData);
            alert("Registration successful!");
            navigate("/login"); // Redirect to login page after successful registration
        } catch (err) {
            setError("Error registering user. Please try again.");
        }
    };

    return (
        <div className="w-[50%] mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">
                Register
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {passwordMismatchError && (
                <p className="text-red-500 text-center mb-4">
                    {passwordMismatchError}
                </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="Enter your username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@domain.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm your password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
