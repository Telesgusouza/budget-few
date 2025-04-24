import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupAndSingout from "../pages/SignupAndSingout";

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<> <SignupAndSingout /> </>} />
                {/* <Route path="" element={<></>} /> */}
            </Routes>
        </BrowserRouter>
    );
}
