import { createContext, useEffect, useState } from "react";
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