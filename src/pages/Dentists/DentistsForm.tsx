import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { DentistContext } from '../../context/DentistContext'
import { WHITE_COLOR } from '../../styles/constants/colors'
import { Label, Input, Button, Form } from '../../styles/global/GlobalStyles'

const DentistsForm = () => {
    const location = useLocation();
    const afterLastSlash = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const { formDentist, setFormDentist, saveMethodItem, saveUpdatedMethodItem } = useContext(DentistContext)


    return (
        <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
            onSubmit={(e) => formDentist.id ? saveUpdatedMethodItem!(e, afterLastSlash) : saveMethodItem(e)}>
            <>
                <Label htmlFor="fullName">Número CRO</Label>
                <Input type="number" name="fullName" id="fullName" onChange={(e) => setFormDentist({ ...formDentist, croNumber: e.target.value })} />

                <Label htmlFor="fullName">Nome completo</Label>
                <Input type="name" name="fullName" id="fullName" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, fullName: e.target.value } })} />

                <Label htmlFor="birthdate">Nascimento</Label>
                <Input type="date" name="birthdate" id="birthdate" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, birthdate: e.target.value } })} />

                <Label htmlFor="cpfNumber">CPF</Label>
                <Input type="number" name="cpfNumber" id="cpfNumber" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, cpfNumber: e.target.value } })} />

                <Label htmlFor="telephoneNumber">Celular</Label>
                <Input type="number" name="telephoneNumber" id="telephoneNumber" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, telephoneNumber: e.target.value } })} />

                <Label htmlFor="emailAddress">Email</Label>
                <Input type="email" name="emailAddress" id="emailAddress" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, emailAddress: e.target.value } })} />

                <Label htmlFor="mainAddress">Endereço</Label>
                <Input type="text" name="mainAddress" id="mainAddress" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, mainAddress: e.target.value } } })} />

                <Label htmlFor="numberAddress">Número</Label>
                <Input type="text" name="numberAddress" id="numberAddress" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, numberAddress: e.target.value } } })} />

                <Label htmlFor="neighborHood">Bairro</Label>
                <Input type="text" name="neighborHood" id="neighborHood" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, neighborHood: e.target.value } } })} />

                <Label htmlFor="complementInfo">Complemento</Label>
                <Input type="text" name="complementInfo" id="complementInfo" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, complementInfo: e.target.value } } })} />

                <Label htmlFor="zipCode">CEP</Label>
                <Input type="text" name="zipCode" id="zipCode" onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, address: { ...formDentist.person.address, zipCode: e.target.value } } })} />

                <Button type="submit">Salvar</Button>
            </>
        </Form>
    )
}

export default DentistsForm;