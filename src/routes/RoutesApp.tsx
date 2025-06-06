import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupAndSingout from "../pages/SignupAndSingout";
import ChangePassword from "../pages/ChangePassword";
import Home from "../pages/Home";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<> <SignupAndSingout /> </>} />
                <Route path="/home" element={<> <Home /> </>} />
                <Route path="/change_password" element={ <ChangePassword/> } />
            </Routes>
        </BrowserRouter>
    );
}
