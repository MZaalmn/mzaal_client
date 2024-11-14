import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Sign from "./pages/Sign";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MasterLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign" element= {<Sign />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
