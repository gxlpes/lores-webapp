import { SpecialtyContext } from '../../context/SpecialtyContext'
import { useContext } from 'react';

import { WHITE_COLOR } from '../../styles/constants/colors'
import { Form, Label, Select, Option, Button } from '../../styles/global/GlobalStyles'
import { DentistContext } from '../../context/DentistContext';

const SpecialtiesDentistForm = () => {
    const { allSpecialties, formSpecialty, setFormSpecialty, setFormDentistSpecialty, formDentistSpecialty, assignSpecialtyToDentist } = useContext(SpecialtyContext);
    const { allDentists } = useContext(DentistContext);

    console.log(allSpecialties);

    return (
        <Form padding={true} width={"100%"} shadow={false} color={WHITE_COLOR} onSubmit={(e) => assignSpecialtyToDentist(e)}>
            <Label htmlFor="specialty">Especialidade</Label>
            <Select onBlur={(e) => setFormDentistSpecialty({ ...formDentistSpecialty, specialtyId: e.target.value })}>
                {allSpecialties !== undefined ? (
                    (
                        allSpecialties.map((el: any) => (
                            <Option value={el.id}>{el.title}</Option>
                        ))
                    )
                ) : (<p>Sem treatment</p>)}
            </Select>
            <Label htmlFor="dentist">Dentista</Label>
            <Select onChange={(e) => setFormDentistSpecialty({ ...formDentistSpecialty, dentistId: e.target.value })}>
                {allDentists !== undefined ? (
                    (
                        allDentists.map((el: any) => (
                            <Option value={el.id}>{el.person.fullName} - CRO {el.croNumber}</Option>
                        ))
                    )
                ) : (<p>Sem treatment</p>)}
            </Select>
            <Button type="submit" >Cadastrar</Button>
        </Form>
    )
}

export default SpecialtiesDentistForm;