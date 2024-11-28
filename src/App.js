import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import Zaal_Nemeh_Page from "./pages/Zaal_Nemeh_Page";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";
import CreateNewsPage from "./components/news/CreateNewsPage";
import About from "./pages/namka/AboutPage";
import FAQ from "./pages/namka/faqPage";
import Help from "./pages/namka/HelpPage";
import Profile from "./pages/namka/ProfilePage";

import NewsDetail from "./pages/newsDetail/NewsDetail";

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
                    <Route path="/newsDetail" element={<NewsDetail />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/zaal_Nemeh_Page"
                        element={<Zaal_Nemeh_Page />}
                    />
                    <Route path="/createNews" element={<CreateNewsPage />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/profile" element={<Profile />} />

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
