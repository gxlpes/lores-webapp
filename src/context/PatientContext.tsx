import { createContext, useEffect, useState } from "react";
import { IPatient } from "../domain/interfaces/contextInterfaces";
import { IPerson } from "../domain/interfaces/patientInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { AddressPayload, PatientPayload } from "../domain/payload/PatientPayload";
import PatientService from "../services/PatientService";

export const PatientContext = createContext<IPatient>({} as IPatient);

export const PatientContextProvider = ({ children }: IChildren) => {
    const patientService = new PatientService();
    const [allPatients, setAllPatients] = useState<IPerson[]>();
    const [formPatient, setFormPatient] = useState<IPerson>({} as IPerson)
    const [loading, setLoading] = useState(true);

    const getAllPatients = async () => {
        console.log("GETALL RUNNING");
        let response = await patientService.getAllPatients();
        if (response?.status == 200) {
            setAllPatients(response.data);
            setLoading(false);
        }
    }

    const savePatient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("SAVE PATIENT RUNNING");
        let response = await patientService.savePatient(formPatient);
        console.log(response);
    }

    useEffect((() => {
        getAllPatients();
    }), [])

    return (
        <PatientContext.Provider value={{
            formPatient,
            savePatient,
            setFormPatient,
            allPatients,
            getAllPatients
        }}>
            <>
                {loading ? <p>loading</p>
                    : (<>
                        {children}
                    </>
                    )}</>
        </PatientContext.Provider>
    )
}