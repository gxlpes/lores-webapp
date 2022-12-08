import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPatient } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { PatientPayload } from "../domain/payload/PersonPayload";
import PatientService from "../services/PatientService";
import UserService from "../services/UserService";
import { LoginUserContext } from "./User/LoginContext";

export const PatientContext = createContext<IPatient>({} as IPatient);

export const PatientContextProvider = ({ children }: IChildren) => {
    const { userForm } = useContext(LoginUserContext);
    const patientService = new PatientService();
    const userService = new UserService();
    const [allPatients, setAllPatients] = useState<PatientPayload[]>();
    const [formPatient, setFormPatient] = useState<PatientPayload>({} as PatientPayload)
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
        // document.location.reload();
    }


    const updateMethodItem = async (id: string) => {
        setFormPatient({} as PatientPayload);
        let response = await patientService.getPatient(id);
        console.log(response!.data);

        if (response?.data) {
            setFormPatient(response.data);
            navigate(`/patients/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await patientService.updatePatient(location, formPatient);
    }

    const createNewPatient = () => {
        setFormPatient({} as PatientPayload);
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