import { log } from "console";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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
        document.location.reload();
    }


    const updateMethodItem = async (id: string) => {
        setFormPatient({} as PersonPayload);
        let response = await patientService.getPatient(id);
        console.log(response!.data);
        if (response?.data) {
            setFormPatient(response.data);
            navigate(`/patients/form/${id}`)
        }
    }

    const createNewPatient = () => {
        setFormPatient({} as PersonPayload);
        navigate("/patients/form/1");
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
            updateMethodItem,
            getAllMethodItems,

            createNewPatient
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