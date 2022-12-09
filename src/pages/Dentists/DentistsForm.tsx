import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { getAfterSlash } from '../../common/getAfterSlash'
import { DentistContext } from '../../context/DentistContext'
import { WHITE_COLOR } from '../../styles/constants/colors'
import { Content } from '../../styles/Content'
import { Label, Input, Button, Form } from '../../styles/global/GlobalStyles'

const DentistsForm = () => {
    const location = useLocation();
    const idPath = getAfterSlash(location.pathname);
    const { formDentist, setFormDentist, saveMethodItem, saveUpdatedMethodItem } = useContext(DentistContext)

    return (
        <Content maxWidth={true} direction="column" align="flex-start" justify="center">
            <Form padding={true} width={"100%"} shadow={false} color={WHITE_COLOR}
                onSubmit={(e) => idPath.length > 10 ? saveUpdatedMethodItem!(e, idPath) : saveMethodItem(e)}>
                <>
                    <Label htmlFor="fullName">Número CRO</Label>
                    <Input type="number" name="fullName" id="fullName" defaultValue={formDentist.croNumber ?? null}
                        onChange={(e) => setFormDentist({ ...formDentist, croNumber: e.target.value })} />

                    <Label htmlFor="fullName">Nome completo</Label>
                    <Input type="name" name="fullName" id="fullName" defaultValue={formDentist.person?.fullName ?? null}
                        onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, fullName: e.target.value } })} />

                    <Label htmlFor="birthdate">Nascimento</Label>
                    <Input type="date" name="birthdate" id="birthdate" defaultValue={formDentist.person?.birthdate ?? null}
                        onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, birthdate: e.target.value } })} />

                    <Label htmlFor="cpfNumber">CPF</Label>
                    <Input type="number" name="cpfNumber" id="cpfNumber" defaultValue={formDentist.person?.cpfNumber ?? null}
                        onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, cpfNumber: e.target.value } })} />

                    <Label htmlFor="telephoneNumber">Celular</Label>
                    <Input type="number" name="telephoneNumber" id="telephoneNumber" defaultValue={formDentist.person?.telephoneNumber ?? null}
                        onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, telephoneNumber: e.target.value } })} />

                    <Label htmlFor="emailAddress">Email</Label>
                    <Input type="email" name="emailAddress" id="emailAddress" defaultValue={formDentist.person?.emailAddress ?? null}
                        onChange={(e) => setFormDentist({ ...formDentist, person: { ...formDentist.person, emailAddress: e.target.value } })} />

                    <Label htmlFor="mainAddress">Endereço</Label>
                    <Input type="text" name="mainAddress" id="mainAddress" defaultValue={formDentist.person?.address?.mainAddress ?? null}
                        onChange={(e) => setFormDentist({
                            ...formDentist, person: {
                                ...formDentist.person, address: {
                                    ...formDentist.person.address, mainAddress: e.target.value
                                }
                            }
                        })} />

                    <Label htmlFor="numberAddress">Número</Label>
                    <Input type="text" name="numberAddress" id="numberAddress" defaultValue={formDentist.person?.address?.numberAddress ?? null}
                        onChange={(e) => setFormDentist({
                            ...formDentist, person: {
                                ...formDentist.person, address: {
                                    ...formDentist.person.address, numberAddress: e.target.value
                                }
                            }
                        })} />

                    <Label htmlFor="neighborHood">Bairro</Label>
                    <Input type="text" name="neighborHood" id="neighborHood" defaultValue={formDentist.person?.address?.neighborHood ?? null}
                        onChange={(e) => setFormDentist({
                            ...formDentist, person: {
                                ...formDentist.person, address: {
                                    ...formDentist.person.address, neighborHood: e.target.value
                                }
                            }
                        })} />

                    <Label htmlFor="complementInfo">Complemento</Label>
                    <Input type="text" name="complementInfo" id="complementInfo" defaultValue={formDentist.person?.address?.complementInfo ?? null}
                        onChange={(e) => setFormDentist({
                            ...formDentist, person: {
                                ...formDentist.person, address: {
                                    ...formDentist.person.address, complementInfo: e.target.value
                                }
                            }
                        })} />

                    <Label htmlFor="zipCode">CEP</Label>
                    <Input type="text" name="zipCode" id="zipCode" defaultValue={formDentist.person?.address?.zipCode ?? null}
                        onChange={(e) => setFormDentist({
                            ...formDentist, person: {
                                ...formDentist.person, address: {
                                    ...formDentist.person.address, zipCode: e.target.value
                                }
                            }
                        })} />

                    <Button type="submit">Salvar</Button>
                </>
            </Form>
        </Content>
    )
}

export default DentistsForm;