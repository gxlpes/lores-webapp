import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { SpecialtyContext } from '../../context/SpecialtyContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles'

const SpecialtiesForm = () => {
    const location = useLocation();
    const afterLastSlash = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const { saveMethodItem, setFormSpecialty, formSpecialty, saveUpdatedMethodItem } = useContext(SpecialtyContext);

    return (
        <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
            onSubmit={(e) => formSpecialty.id ? saveUpdatedMethodItem!(e, afterLastSlash) : saveMethodItem(e)}>
            <>
                <Label htmlFor="fullName">Título</Label>
                <Input type="name" name="fullName" id="fullName" onChange={(e) => setFormSpecialty({ ...formSpecialty, ["title"]: e.target.value })} />

                <Button type="submit">Salvar</Button>
            </>
        </Form >)
}

export default SpecialtiesForm