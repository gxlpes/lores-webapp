import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAppointment } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { AppointmentPayload } from "../domain/payload/AppointmentPayload";
import AppointmentService from "../services/AppointmentService";

export const AppointmentContext = createContext<IAppointment>({} as IAppointment);

export const AppointmentContextProvider = ({ children }: IChildren) => {
    const appointmentService = new AppointmentService();
    const [allAppointments, setAllAppointments] = useState<AppointmentPayload[] | string[]>([]);
    const [formAppointment, setFormAppointment] = useState<AppointmentPayload>({} as AppointmentPayload)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
        console.log("form", formAppointment);
        let response = await appointmentService.saveAppointment(formAppointment);
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
    }

    const createNewAppointment = () => {
        setFormAppointment({} as AppointmentPayload);
        navigate("/appointments/form/new");
    }

    useEffect((() => {
        getAllMethodItems();
    }), [])

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
            createNewAppointment
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