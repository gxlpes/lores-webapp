import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { TreatmentContext } from '../../context/TreatmentContext'
import { WHITE_COLOR } from '../../styles/constants/colors'
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles'

const FormTreatment = () => {
    const location = useLocation();
    const afterLastSlash = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    const { formTreatment, setFormTreatment, saveMethodItem, saveUpdatedMethodItem } = useContext(TreatmentContext)

    return (
        <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
            onSubmit={(e) => formTreatment.id ? saveUpdatedMethodItem!(e, afterLastSlash) : saveMethodItem(e)}>
            <>
                <Label htmlFor="fullName">Preço</Label>
                <Input type="number" name="fullName" id="fullName" onChange={(e) => setFormTreatment({ ...formTreatment, priceAppointment: Number(e.target.value) })} />

                <Label htmlFor="fullName">Campo da especialidade</Label>
                <Input type="text" name="fullName" id="fullName" onChange={(e) => setFormTreatment({ ...formTreatment, fieldOfSpecialty: e.target.value })} />

                <Label htmlFor="birthdate">Procedimento</Label>
                <Input type="text" name="birthdate" id="birthdate" onChange={(e) => setFormTreatment({ ...formTreatment, procedureName: e.target.value })} />

                <Button type="submit">Salvar</Button>
            </>
        </Form>
    )
}

export default FormTreatment;