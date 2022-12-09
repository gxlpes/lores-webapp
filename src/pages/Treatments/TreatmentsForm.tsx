import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { getAfterSlash } from '../../common/getAfterSlash'
import { TreatmentContext } from '../../context/TreatmentContext'
import { WHITE_COLOR } from '../../styles/constants/colors'
import { Content } from '../../styles/Content'
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles'

const FormTreatment = () => {
    const location = useLocation();
    const idPath = getAfterSlash(location.pathname);
    const { formTreatment, setFormTreatment, saveMethodItem, saveUpdatedMethodItem } = useContext(TreatmentContext)

    return (
        <Content maxWidth={true} direction="column" align="flex-start" justify="center">
            <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
                onSubmit={(e) => idPath.length > 10 ? saveUpdatedMethodItem!(e, idPath) : saveMethodItem(e)}>
                <>
                    <Label htmlFor="priceAppointment">Preço</Label>
                    <Input type="number" name="priceAppointment" id="priceAppointment" defaultValue={formTreatment.priceAppointment ?? null} onChange={(e) => setFormTreatment({ ...formTreatment, priceAppointment: Number(e.target.value) })} />

                    <Label htmlFor="fieldOfSpecialty">Campo da especialidade</Label>
                    <Input type="text" name="fieldOfSpecialty" id="fieldOfSpecialty" defaultValue={formTreatment.fieldOfSpecialty ?? null} onChange={(e) => setFormTreatment({ ...formTreatment, fieldOfSpecialty: e.target.value })} />

                    <Label htmlFor="procedureName">Procedimento</Label>
                    <Input type="text" name="procedureName" id="procedureName" defaultValue={formTreatment.procedureName ?? null} onChange={(e) => setFormTreatment({ ...formTreatment, procedureName: e.target.value })} />

                    <Button type="submit">Salvar</Button>
                </>
            </Form>
        </Content>
    )
}

export default FormTreatment;