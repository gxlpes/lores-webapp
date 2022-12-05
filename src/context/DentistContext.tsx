import { createContext, useEffect, useState } from "react";
import { IDentist } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { DentistPayload } from "../domain/payload/DentistPayload";
import DentistService from "../services/DentistService";

export const DentistContext = createContext<IDentist>({} as IDentist);

export const DentistContextProvider = ({ children }: IChildren) => {
    const dentistService = new DentistService();
    const [allDentists, setAllDentists] = useState<DentistPayload[]>([]);
    const [formDentist, setFormDentist] = useState<DentistPayload>({} as DentistPayload)
    const [loading, setLoading] = useState(true);

    const getAllDentists = async () => {
        let response = await dentistService.getAllDentists();
        console.log(response);

        if (response?.status == 200) {
            setAllDentists(response.data);
            setLoading(false);
        }
    }

    const saveDentist = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await dentistService.saveDentist(formDentist);
    }

    useEffect((() => {
        getAllDentists();
    }), [])

    return (
        <DentistContext.Provider value={{
            allDentists,
            getAllDentists
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