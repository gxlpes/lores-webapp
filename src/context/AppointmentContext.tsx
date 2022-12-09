import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { responseHandler } from "../api/responseHandler";
import { IAppointment } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { AppointmentPayload } from "../domain/payload/AppointmentPayload";
import AppointmentService from "../services/AppointmentService";
import DentistService from "../services/DentistService";
import PatientService from "../services/PatientService";

export const AppointmentContext = createContext<IAppointment>({} as IAppointment);

export const AppointmentContextProvider = ({ children }: IChildren) => {
    const appointmentService = new AppointmentService();
    const dentistService = new DentistService();
    const patientService = new PatientService();

    const [allAppointments, setAllAppointments] = useState<AppointmentPayload[] | string[]>([]);
    const [formAppointment, setFormAppointment] = useState<AppointmentPayload>({} as AppointmentPayload)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [dentistCro, setDentistCro] = useState("");
    const [patientCpf, setPatientCpf] = useState("");

    const getAllMethodItems = async () => {
        let response = await appointmentService.getAllAppointments();
        console.log(response);

        if (response?.status == 200) {
            setAllAppointments(response.data);
            setLoading(false);
        }

        setLoading(false);
    }

    const saveMethodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formAppointment);
        let response = await appointmentService.saveAppointment(formAppointment);
        responseHandler(response, "post");
    }

    const deleteMethodItem = async (id: string) => {
        let response = await appointmentService.deleteAppointment(id);
        console.log(response);
    }

    const updateMethodItem = async (id: string) => {
        setFormAppointment({} as AppointmentPayload);
        let response = await appointmentService.getAppointment(id);
        console.log(response!.data);

        if (response?.data) {
            setFormAppointment(response.data);
            navigate(`/appointments/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await appointmentService.updateAppointment(location, formAppointment);
        responseHandler(response, "put");
    }

    const createNewAppointment = () => {
        setFormAppointment({} as AppointmentPayload);
        navigate("/appointments/form/new");
    }

    const getDentistIdByCro = async () => {
        let response = await dentistService.getDentistByCro(dentistCro);
        console.log(response)
        setFormAppointment({ ...formAppointment, dentist: { ...formAppointment.dentist, id: response?.data.id } })
    }

    const getPatientByCpf = async () => {
        let response = await patientService.getPatientByCpf(patientCpf);
        console.log(response)
        setFormAppointment({ ...formAppointment, patient: { ...formAppointment.patient, id: response?.data.id } })
    }

    useEffect((() => {
        getAllMethodItems();
    }), [])

    useEffect((() => {
        getDentistIdByCro();
    }), [dentistCro])

    useEffect((() => {
        getPatientByCpf();
    }), [patientCpf])

    return (
        <AppointmentContext.Provider value={{
            allAppointments,
            deleteMethodItem,
            getAllMethodItems,
            setFormAppointment,
            formAppointment,
            saveMethodItem,
            updateMethodItem,
            saveUpdatedMethodItem,
            createNewAppointment,
            setDentistCro,
            setPatientCpf
        }}>
            <>
                {loading ? <p>loading</p>
                    : (
                        <>
                            {children}
                        </>
                    )}
            </>
        </AppointmentContext.Provider>
    )
}