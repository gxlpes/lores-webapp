import { createContext, useEffect, useState } from "react";
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

        if (response?.status == 200) {
            window.location.href = "/main";
        }
    }

    const deleteMethodItem = async (id: string) => {
        let response = await appointmentService.deleteAppointment(id);
        console.log(response);
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
            saveMethodItem
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