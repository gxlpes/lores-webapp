import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDentist } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { DentistPayload } from "../domain/payload/DentistPayload";
import DentistService from "../services/DentistService";

export const DentistContext = createContext<IDentist>({} as IDentist);

export const DentistContextProvider = ({ children }: IChildren) => {
    const [formDentist, setFormDentist] = useState<DentistPayload>({} as DentistPayload)
    const [allDentists, setAllDentists] = useState<DentistPayload[] | string[]>([]);
    const dentistService = new DentistService();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getAllMethodItems = async () => {
        let response = await dentistService.getAllDentists();
        console.log(response);

        if (response?.status == 200) {
            setAllDentists(response.data);
            setLoading(false);
        }
    }

    const saveMethodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formDentist);
        let response = await dentistService.saveDentist(formDentist);

        if (response?.status == 200) {
            window.location.href = "/main";
        }
    }

    const deleteMethodItem = async (id: string) => {
        let response = await dentistService.deleteDentist(id);
        console.log(response);
    }

    const updateMethodItem = async (id: string) => {
        setFormDentist({} as DentistPayload);
        let response = await dentistService.getDentist(id);
        console.log(response!.data);

        if (response?.data) {
            setFormDentist(response.data);
            navigate(`/patients/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await dentistService.updateDentist(location, formDentist);
    }

    const createNewDentist = () => {
        setFormDentist({} as DentistPayload);
        navigate("/patients/form/1");
    }

    useEffect((() => {
        getAllMethodItems();
    }), [])

    return (
        <DentistContext.Provider value={{
            allDentists,
            deleteMethodItem,
            getAllMethodItems,
            setFormDentist,
            formDentist,
            saveMethodItem,
            createNewDentist
        }}>
            <>
                {loading ? <p>loading</p>
                    : (
                        <>
                            {children}
                        </>
                    )}
            </>
        </DentistContext.Provider>
    )
}