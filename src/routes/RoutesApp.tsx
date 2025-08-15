import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupAndSingout from "../pages/SignupAndSingout";
import ChangePassword from "../pages/ChangePassword";
import Home from "../pages/Home";
import Pots from "../pages/Pots";
import PotInfo from "../pages/PotInfo";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<> <SignupAndSingout /> </>} />
                <Route path="/home" element={<> <Home /> </>} />
                <Route path="/change_password" element={ <ChangePassword/> } />
                <Route path="/pots" element={<> <Pots /> </>} />
                <Route path="/pot_info/:id" element={<> <PotInfo /> </>} />
            </Routes>
        </BrowserRouter>
    );
}
