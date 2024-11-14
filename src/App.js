import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MasterLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
