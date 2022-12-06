import { useContext } from 'react'
import { TreatmentContext } from '../../context/TreatmentContext'

const FormTreatment = () => {
    const { formTreatment, setFormTreatment, saveMethodItem } = useContext(TreatmentContext)

    return (
        <form onSubmit={(e) => saveMethodItem(e)}>
            <>
                <label htmlFor="fullName">Preço</label>
                <input type="number" name="fullName" id="fullName" onChange={(e) => setFormTreatment({ ...formTreatment, priceAppointment: Number(e.target.value) })} />

                <label htmlFor="fullName">Campo da especialidade</label>
                <input type="text" name="fullName" id="fullName" onChange={(e) => setFormTreatment({ ...formTreatment, fieldOfSpecialty: e.target.value })} />

                <label htmlFor="birthdate">Procedimento</label>
                <input type="text" name="birthdate" id="birthdate" onChange={(e) => setFormTreatment({ ...formTreatment, procedureName: e.target.value })} />

                <button type="submit">Salvar</button>
            </>
        </form>
    )
}

export default FormTreatment;