import { Route, Routes } from "react-router-dom";
import Appointments from "../pages/Appointments/Appointments";
import Home from '../pages/Home/Home';
import LoginUser from '../pages/Login/LoginUser';
import RegisterUser from '../pages/Register/RegisterUser';


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/appointments" element={<Appointments />} />
            </Routes>
        </>
    )
}

export default AppRoutes