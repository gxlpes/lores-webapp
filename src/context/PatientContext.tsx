import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPatient } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import PatientService from "../services/PatientService";

export const PatientContext = createContext<IPatient>({} as IPatient);

export const PatientContextProvider = ({ children }: IChildren) => {
    const patientService = new PatientService();
    const navigate = useNavigate();

    const getAllPatients = async () => {
        let response = await patientService.getAllPatients();
        console.log("context", response);
        return response;
    }



    return (
        <PatientContext.Provider value={{
            getAllPatients
        }}>{children}</PatientContext.Provider>
    )
}