import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import AskLoginOrRegister from "./pages/AskLogin_or_Register";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MasterLayout />}>
                    {/* HomePage should be accessible for guests, so no ProtectedRoute */}
                    <Route path="/" element={<HomePage />} />

                    <Route
                        path="/register"
                        element={
                            <RedirectIfLoggedIn>
                                <RegisterPage />
                            </RedirectIfLoggedIn>
                        }
                    />

                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/askLogin-or-register"
                        element={<AskLoginOrRegister />}
                    />

                    {/* Protected routes */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
