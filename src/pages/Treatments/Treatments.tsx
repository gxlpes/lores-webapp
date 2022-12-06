import { useContext } from 'react';
import { DentistContext } from '../../context/DentistContext';
import { TreatmentContext } from '../../context/TreatmentContext';
import { TreatmentPayload } from '../../domain/payload/TreatmentPayload';
import FormTreatment from './FormTreatment';

const Treatments = () => {
    const { allTreatments, deleteMethodItem } = useContext(TreatmentContext);

    return (
        <>
            <>
                <FormTreatment />
            </>
            {typeof allTreatments == "string" ? (<p>Opa, sem treatments</p>) : (<>
                {
                    allTreatments!.map((el: any) => (
                        <>
                            <p>{el.priceAppointment}</p>
                            <p>{el.procedureName}</p>
                            <p>{el.fieldOfSpecialty}</p>
                            <p>{el.id}</p>
                            <a style={{ cursor: "pointer" }} onClick={() => deleteMethodItem(el.id)}>Excluir</a>
                        </>
                    ))
                }</>)
            }
        </>
    )
}

export default Treatments;