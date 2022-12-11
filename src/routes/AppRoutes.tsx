import { Route, Routes } from "react-router-dom";
import { APPOINTMENTS_PAGE_ENDPOINT, DENTISTS_PAGE_ENDPOINT, LOGIN_PAGE_ENDPOINT, MAIN_PAGE_ENDPOINT, PATIENTS_PAGE_ENDPOINT, REGISTER_PAGE_ENDPOINT, SPECIALTY_PAGE_ENDPOINT, TREATMENT_PAGE_ENDPOINT } from "../common/constants";
import RequireAuth from "../common/RequireAuth";
import { AppointmentContextProvider } from "../context/AppointmentContext";
import { DentistContextProvider } from "../context/DentistContext";
import { PatientContextProvider } from "../context/PatientContext";
import { SpecialtyContextProvider } from "../context/SpecialtyContext";
import { TreatmentContextProvider } from "../context/TreatmentContext";
import { LayoutProfile } from "../domain/enum/LayoutProfile";
import { RolesName } from "../domain/enum/RolesName";
import Layout from "../layout/Layout";
import Appointments from "../pages/Appointments/Appointments";
import AppointmentsForm from "../pages/Appointments/AppointmentsForm";
import Dentists from "../pages/Dentists/Dentists";
import DentistsForm from "../pages/Dentists/DentistsForm";

import ErrorPage from "../pages/Error/Error";
import Home from '../pages/Home/Home';
import LoginUser from '../pages/Login/LoginUser';
import Main from "../pages/Main/Main";
import Patients from "../pages/Patients/Patients";
import PatientsForm from "../pages/Patients/PatientsForm";
import RegisterUser from '../pages/Register/RegisterUser';
import Specialties from "../pages/Specialties/Specialties";
import SpecialtiesDentistForm from "../pages/Specialties/SpecialtiesDentistForm";
import SpecialtiesForm from "../pages/Specialties/SpecialtiesForm";
import Treatments from "../pages/Treatments/Treatments";
import TreatmentsForm from "../pages/Treatments/TreatmentsForm";


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={REGISTER_PAGE_ENDPOINT} element={<RegisterUser />} />
                <Route path={LOGIN_PAGE_ENDPOINT} element={<LoginUser />} />

                <Route element={<Layout />}>
                    <Route path={MAIN_PAGE_ENDPOINT} element={
                        <AppointmentContextProvider>
                            <DentistContextProvider>
                                <TreatmentContextProvider>
                                    <PatientContextProvider>
                                        <SpecialtyContextProvider>
                                            <Main />
                                        </SpecialtyContextProvider>
                                    </PatientContextProvider>
                                </TreatmentContextProvider>
                            </DentistContextProvider>
                        </AppointmentContextProvider>} />
                </Route>


                <Route element={<RequireAuth allowedRoles={[RolesName.user, RolesName.admin]} />}>
                    <Route element={<Layout layoutProfile={LayoutProfile.public} />}>

                        <Route path={APPOINTMENTS_PAGE_ENDPOINT} element={
                            <AppointmentContextProvider>
                                <Appointments />
                            </AppointmentContextProvider>} />

                    </Route>
                </Route>

                <Route element={<RequireAuth allowedRoles={[RolesName.admin]} />}>
                    <Route element={<Layout layoutProfile={LayoutProfile.private} />}>


                        <Route path={PATIENTS_PAGE_ENDPOINT} element={
                            <PatientContextProvider>
                                <Patients />
                            </PatientContextProvider>} />

                        <Route path={DENTISTS_PAGE_ENDPOINT} element={
                            <DentistContextProvider>
                                <Dentists />
                            </DentistContextProvider>} />

                        <Route path={SPECIALTY_PAGE_ENDPOINT} element={
                            <SpecialtyContextProvider>
                                <Specialties />
                            </SpecialtyContextProvider>} />

                        <Route path={TREATMENT_PAGE_ENDPOINT} element={
                            <TreatmentContextProvider>
                                <Treatments />
                            </TreatmentContextProvider>} />

                        <Route path={PATIENTS_PAGE_ENDPOINT + "/form/:id"} element={
                            <PatientContextProvider>
                                <PatientsForm />
                            </PatientContextProvider>} />

                        <Route path={DENTISTS_PAGE_ENDPOINT + "/form/:id"} element={
                            <DentistContextProvider>
                                <DentistsForm />
                            </DentistContextProvider>} />


                        <Route path={SPECIALTY_PAGE_ENDPOINT + "/form/:id"} element={
                            <SpecialtyContextProvider>
                                <SpecialtiesForm />
                            </SpecialtyContextProvider>} />

                        <Route path={SPECIALTY_PAGE_ENDPOINT + "/form/specialty/dentist"} element={
                            <SpecialtyContextProvider>
                                <DentistContextProvider>
                                    <SpecialtiesDentistForm />
                                </DentistContextProvider>
                            </SpecialtyContextProvider>} />


                        <Route path={TREATMENT_PAGE_ENDPOINT + "/form/:id"} element={
                            <TreatmentContextProvider>
                                <TreatmentsForm />
                            </TreatmentContextProvider>} />



                        <Route path={APPOINTMENTS_PAGE_ENDPOINT + "/form/:id"} element={
                            <AppointmentContextProvider>
                                <DentistContextProvider>
                                    <TreatmentContextProvider>
                                        <AppointmentsForm />
                                    </TreatmentContextProvider>
                                </DentistContextProvider>
                            </AppointmentContextProvider>} />


                    </Route>
                </Route>

                <Route path="*" element={<ErrorPage />} />

            </Routes>

        </>
    )
}

export default AppRoutes