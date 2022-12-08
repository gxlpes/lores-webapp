import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISpecialty } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { SpecialtyPayload } from "../domain/payload/SpecialtyPayload";
import SpecialtyService from "../services/SpecialtyService";

export const SpecialtyContext = createContext<ISpecialty>({} as ISpecialty);

export const SpecialtyContextProvider = ({ children }: IChildren) => {
    const specialtyService = new SpecialtyService();
    const [allSpecialties, setAllSpecialties] = useState<SpecialtyPayload[]>();
    const [formSpecialty, setFormSpecialty] = useState<SpecialtyPayload>({} as SpecialtyPayload)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const getAllMethodItems = async () => {
        let response = await specialtyService.getAllSpecialties();
        if (response?.status == 200) {
            setAllSpecialties(response.data);
            setLoading(false);
        }
    }

    const saveMethodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await specialtyService.saveSpecialty(formSpecialty);
    }

    const deleteMethodItem = async (id: string) => {
        let response = await specialtyService.deleteSpecialty(id);
        console.log(response);
    }

    const updateMethodItem = async (id: string) => {
        setFormSpecialty({} as SpecialtyPayload);
        let response = await specialtyService.getSpecialty(id);
        console.log(response!.data);

        if (response?.data) {
            setFormSpecialty(response.data);
            navigate(`/patients/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await specialtyService.updateSpecialty(location, formSpecialty);
    }

    const createNewSpecialty = () => {
        setFormSpecialty({} as SpecialtyPayload);
        navigate("/specialties/form/new");
    }

    useEffect((() => {
        getAllMethodItems();
    }), [])

    return (
        <SpecialtyContext.Provider value={{
            formSpecialty,
            setFormSpecialty,
            allSpecialties,
            deleteMethodItem,
            saveMethodItem,
            getAllMethodItems,
            createNewSpecialty,
            saveUpdatedMethodItem
        }}>
            <>
                {loading ? <p>loading</p>
                    : (
                        <>
                            {children}
                        </>
                    )}
            </>
        </SpecialtyContext.Provider>
    )
}