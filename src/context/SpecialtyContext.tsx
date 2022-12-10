import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { responseHandler } from "../api/responseHandler";
import { ISpecialty } from "../domain/interfaces/contextInterfaces";
import { IChildren } from "../domain/interfaces/reactInterfaces";
import { SpecialtyPayload } from "../domain/payload/SpecialtyPayload";
import SpecialtyService from "../services/SpecialtyService";

export const SpecialtyContext = createContext<ISpecialty>({} as ISpecialty);

export const SpecialtyContextProvider = ({ children }: IChildren) => {
    const specialtyService = new SpecialtyService();
    const [allSpecialties, setAllSpecialties] = useState<SpecialtyPayload[]>();
    const [formSpecialty, setFormSpecialty] = useState<SpecialtyPayload>({} as SpecialtyPayload)
    const [formDentistSpecialty, setFormDentistSpecialty] = useState<any>("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    console.log(formDentistSpecialty);

    const getAllMethodItems = async () => {
        let response = await specialtyService.getAllSpecialties();
        if (response?.status == 200) {
            setAllSpecialties(response.data);
        }
        setLoading(false);

    }

    const saveMethodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await specialtyService.saveSpecialty(formSpecialty);
        responseHandler(response, "post");
    }

    const deleteMethodItem = async (id: string) => {
        let response = await specialtyService.deleteSpecialty(id);
        responseHandler(response, "delete");
    }

    const updateMethodItem = async (id: string) => {
        setFormSpecialty({} as SpecialtyPayload);
        let response = await specialtyService.getSpecialty(id);
        console.log(response!.data);

        if (response?.data) {
            setFormSpecialty(response.data);
            navigate(`/specialties/form/${id}`)
        }
    }

    const saveUpdatedMethodItem = async (e: React.FormEvent<HTMLFormElement>, location: string) => {
        e.preventDefault();
        let response = await specialtyService.updateSpecialty(location, formSpecialty);
        responseHandler(response, "put");
    }

    const createNewSpecialty = () => {
        setFormSpecialty({} as SpecialtyPayload);
        navigate("/specialties/form/new");
    }

    const assignSpecialtyToDentist = async (e: any) => {
        e.preventDefault();
        e.preventDefault();
        // let response = await specialtyService.assignSpecialtyToDentist(formDentistSpecialty.specialtyId, formDentistSpecialty.dentistId)
    }

    useEffect((() => {
        getAllMethodItems();
    }), []);

    return (
        <SpecialtyContext.Provider value={{
            formSpecialty,
            setFormSpecialty,
            allSpecialties,
            deleteMethodItem,
            saveMethodItem,
            getAllMethodItems,
            createNewSpecialty,
            saveUpdatedMethodItem,
            updateMethodItem,
            setFormDentistSpecialty,
            formDentistSpecialty,
            assignSpecialtyToDentist
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