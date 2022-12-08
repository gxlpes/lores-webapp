import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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

    const updateMethodItem = async (id: string) => {
        setFormTreatment({} as TreatmentPayload);
        let response = await treatmentService.getTreatment(id);
        console.log(response!.data);

        if (response?.data) {
            setFormTreatment(response.data);
            navigate(`/treatments/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await treatmentService.updateTreatment(location, formTreatment);
    }

    const createNewTreatment = () => {
        setFormTreatment({} as TreatmentPayload);
        navigate("/treatments/form/new");
    }


    useEffect((() => {
        getAllMethodItems();
    }), [])

    return (
        <TreatmentContext.Provider value={{
            allTreatments,
            formTreatment,
            setFormTreatment,
            deleteMethodItem,
            updateMethodItem,
            saveMethodItem,
            getAllMethodItems,
            saveUpdatedMethodItem,
            createNewTreatment
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