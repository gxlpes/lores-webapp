import { Route, Routes } from "react-router-dom";
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
            </Routes>
        </>
    )
}

export default AppRoutes