import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { responseHandler } from "../api/responseHandler";
import { IPatient } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { PatientPayload } from "../domain/payload/PatientPayload";
import PatientService from "../services/PatientService";
import { LoginUserContext } from "./User/LoginContext";

export const PatientContext = createContext<IPatient>({} as IPatient);

export const PatientContextProvider = ({ children }: IChildren) => {
    const [formPatient, setFormPatient] = useState<PatientPayload>({} as PatientPayload)
    const [allPatients, setAllPatients] = useState<PatientPayload[]>();
    const { userForm } = useContext(LoginUserContext);
    const [loading, setLoading] = useState(true);
    const patientService = new PatientService();
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
        responseHandler(response, "post");
    }

    const deleteMethodItem = async (id: string) => {
        let response = await patientService.deletePatient(id);
        responseHandler(response, 'delete');
    }


    const updateMethodItem = async (id: string) => {
        setFormPatient({} as PatientPayload);
        let response = await patientService.getPatient(id);
        console.log(response!.data, "single");

        if (response?.data) {
            setFormPatient(response.data);
            navigate(`/patients/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await patientService.updatePatient(location, formPatient);
        responseHandler(response, "put");
    }

    const createNewPatient = () => {
        setFormPatient({} as PatientPayload);
        navigate("/patients/form/new");
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
            saveUpdatedMethodItem,
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