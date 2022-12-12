import { useContext } from 'react';
import { SpecialtyContext } from '../../context/SpecialtyContext';
import { TreatmentContext } from '../../context/TreatmentContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Button, Form, Label, Select, Option } from '../../styles/global/GlobalStyles';

const TreatmentsSpecialtyForm = () => {
    const { formSpecialtyTreatment, setFormSpecialtyTreatment, assignSpecialtyToTreatment, allTreatments } = useContext(TreatmentContext);
    const { allSpecialties } = useContext(SpecialtyContext);

    console.log(allSpecialties);

    return (
        <Content maxWidth={true}>
            <Form padding={true} width={"100%"} shadow={false} color={WHITE_COLOR} onSubmit={(e) => assignSpecialtyToTreatment(e)}>

                <Label htmlFor="specialty">Tratamento</Label>
                <Select onBlur={(e) => setFormSpecialtyTreatment({ ...formSpecialtyTreatment, treatmentId: e.target.value })}>
                    {allTreatments !== undefined ? (
                        (
                            allTreatments.map((el: any) => (
                                <Option value={el.id}>{el.procedureName}</Option>
                            ))
                        )
                    ) : (<p>Sem treatment</p>)}
                </Select>

                <Label htmlFor="dentist">Especialidade</Label>
                <Select onBlur={(e) => setFormSpecialtyTreatment({ ...formSpecialtyTreatment, specialtyId: e.target.value })}>
                    {allSpecialties !== undefined ? (
                        (
                            allSpecialties.map((el: any) => (
                                <Option value={el.id}>{el.title}</Option>
                            ))
                        )
                    ) : (<p>Sem treatment</p>)}
                </Select>

                <Button type="submit" >Cadastrar</Button>
            </Form>
        </Content>)
}

export default TreatmentsSpecialtyForm