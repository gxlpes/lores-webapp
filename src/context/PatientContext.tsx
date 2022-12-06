import { createContext, useEffect, useState } from "react";
import { IPatient } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { PersonPayload } from "../domain/payload/PersonPayload";
import PatientService from "../services/PatientService";

export const PatientContext = createContext<IPatient>({} as IPatient);

export const PatientContextProvider = ({ children }: IChildren) => {
    const patientService = new PatientService();
    const [allPatients, setAllPatients] = useState<PersonPayload[]>();
    const [formPatient, setFormPatient] = useState<PersonPayload>({} as PersonPayload)
    const [loading, setLoading] = useState(true);

    const getAllMethodItems = async () => {
        let response = await patientService.getAllPatients();
        if (response?.status == 200) {
            setAllPatients(response.data);
            setLoading(false);
        }
    }

    const saveMethodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await patientService.savePatient(formPatient);
    }

    const deleteMethodItem = async (id: string) => {
        let response = await patientService.deletePatient(id);
        console.log(response);
    }

    useEffect((() => {
        getAllMethodItems();
    }), [])

    return (
        <PatientContext.Provider value={{
            allPatients,
            formPatient,
            setFormPatient,
            saveMethodItem,
            deleteMethodItem,
            getAllMethodItems
        }}>
            <>
                {loading ? <p>loading</p>
                    : (
                        <>
                            {children}
                        </>
                    )}
            </>
        </PatientContext.Provider >
    )
}