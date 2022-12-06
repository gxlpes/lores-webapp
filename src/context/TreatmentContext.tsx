import { createContext, useEffect, useState } from "react";
import { ITreatment } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { TreatmentPayload } from "../domain/payload/TreatmentPayload";
import TreatmentService from "../services/TreatmentService";

export const TreatmentContext = createContext<ITreatment>({} as ITreatment);

export const TreatmentContextProvider = ({ children }: IChildren) => {
    const treatmentService = new TreatmentService();
    const [allTreatments, setAllTreatments] = useState<TreatmentPayload[]>();
    const [formTreatment, setFormTreatment] = useState<TreatmentPayload>({} as TreatmentPayload)
    const [loading, setLoading] = useState(true);

    const getAllMethodItems = async () => {
        let response = await treatmentService.getAllTreatments();
        if (response?.status == 200) {
            setAllTreatments(response.data);
            setLoading(false);
        }
    }

    const saveMethodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await treatmentService.saveTreatment(formTreatment);
    }

    const deleteMethodItem = async (id: string) => {
        let response = await treatmentService.deleteTreatment(id);
        console.log(response);
    }


    useEffect((() => {
        getAllMethodItems();
    }), [])

    return (
        <TreatmentContext.Provider value={{
            formTreatment,
            setFormTreatment,
            allTreatments,
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
        </TreatmentContext.Provider>
    )
}