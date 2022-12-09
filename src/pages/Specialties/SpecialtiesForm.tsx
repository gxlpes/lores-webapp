import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { getAfterSlash } from '../../common/getAfterSlash';
import { SpecialtyContext } from '../../context/SpecialtyContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles'

const SpecialtiesForm = () => {
    const location = useLocation();
    const idPath = getAfterSlash(location.pathname);
    const { saveMethodItem, setFormSpecialty, formSpecialty, saveUpdatedMethodItem } = useContext(SpecialtyContext);

    return (
        <Content maxWidth={true} direction="column" align="flex-start" justify="center">
            <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
                onSubmit={(e) => idPath.length > 10 ? saveUpdatedMethodItem!(e, idPath) : saveMethodItem(e)}>
                <>
                    <Label htmlFor="fullName">Título</Label>
                    <Input type="name" name="fullName" id="fullName" defaultValue={formSpecialty.title ?? null} onChange={(e) => setFormSpecialty({ ...formSpecialty, ["title"]: e.target.value })} />

                    <Button type="submit">Salvar</Button>
                </>
            </Form >
        </Content>)
}

export default SpecialtiesForm