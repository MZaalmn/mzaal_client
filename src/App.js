import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import AskLogin_or_Register from "./pages/AskLogin_or_Register";


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
                    <Route path="/askLogin_or_Register" element={<AskLogin_or_Register />} />

                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
