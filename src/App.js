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
import Test from "./pages/Test";
import Seeing_Zaal_Info from "./pages/Seeing_Zaal_Info";
import Zaal_Ezemshigch_Nevternsii_Daraa from "./pages/Zaal_Ezemshigch_Nevternsii_Daraa";
import NewsDetail from "./pages/newsDetail/NewsDetail";
import AddHallPage from "./pages/addHallPage";

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
                    <Route path="/test" element={<Test />} />
                    <Route path="/zaal_Ezemshigch_Nevternsii_Daraa" element={<Zaal_Ezemshigch_Nevternsii_Daraa />} />
                    <Route
                        path="/seeing_Zaal_Info"
                        element={<Seeing_Zaal_Info />}
                    />
                    <Route path="/addHall" element={<AddHallPage />} />

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
