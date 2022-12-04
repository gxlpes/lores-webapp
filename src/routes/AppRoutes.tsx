import { Route, Routes } from "react-router-dom";
import { LOGIN_PAGE_ENDPOINT, MAIN_PAGE_ENDPOINT, PATIENTS_PAGE_ENDPOINT, REGISTER_PAGE_ENDPOINT } from "../common/constants";
import RequireAuth from "../common/RequireAuth";
import { LayoutProfile } from "../domain/enum/LayoutProfile";
import { RolesName } from "../domain/enum/RolesName";
import Layout from "../layout/Layout";

import ErrorPage from "../pages/Error/Error";
import Home from '../pages/Home/Home';
import LoginUser from '../pages/Login/LoginUser';
import Main from "../pages/Main/Main";
import Patients from "../pages/Patients/Patients";
import RegisterUser from '../pages/Register/RegisterUser';


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route element={<Layout layoutProfile={LayoutProfile.public} />}>
                    <Route path={REGISTER_PAGE_ENDPOINT} element={<RegisterUser />} />
                    <Route path={LOGIN_PAGE_ENDPOINT} element={<LoginUser />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[RolesName.admin]} />}>
                    <Route element={<Layout layoutProfile={LayoutProfile.private} />}>
                        <Route path={PATIENTS_PAGE_ENDPOINT} element={<Patients />} />
                        <Route path={MAIN_PAGE_ENDPOINT} element={<Main />} />
                    </Route>
                </Route>


                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default AppRoutes