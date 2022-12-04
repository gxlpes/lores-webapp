import { createContext, useEffect, useState } from "react";
import { IPatient } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { AddressPayload, PatientPayload } from "../domain/payload/PatientPayload";
import PatientService from "../services/PatientService";

export const PatientContext = createContext<IPatient>({} as IPatient);

export const PatientContextProvider = ({ children }: IChildren) => {
    const patientService = new PatientService();
    const [allPatients, setAllPatients] = useState<any>();
    const [formPatient, setFormPatient] = useState<any>()

    const getAllPatients = async () => {
        let response = await patientService.getAllPatients();
        if (response?.status == 200) setAllPatients(response.data)
    }

    const savePatient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await patientService.savePatient(formPatient);
        console.log(response);

    }


    useEffect((() => {
        getAllPatients()
    }), [])

    console.log(formPatient);


    return (
        <PatientContext.Provider value={{
            formPatient,
            savePatient,
            setFormPatient,
            allPatients,
            getAllPatients
        }}>{children}</PatientContext.Provider>
    )
}