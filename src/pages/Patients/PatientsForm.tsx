import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { PatientContext } from '../../context/PatientContext';
import { PersonPayload } from '../../domain/payload/PersonPayload';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles';

const PatientsForm = () => {
    const location = useLocation();
    const afterLastSlash = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const { setFormPatient, formPatient, saveMethodItem, saveUpdatedMethodItem } = useContext(PatientContext);

    return (
        <Content maxWidth={true} direction="column" align="flex-start" justify="center">
            <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
                onSubmit={(e) => formPatient.id ? saveUpdatedMethodItem!(e, afterLastSlash) : saveMethodItem(e)}>
                <>
                    <Label htmlFor="fullName">Nome completo</Label>
                    <Input type="name" name="fullName" id="fullName" defaultValue={formPatient.person?.fullName ?? null} onChange={(e) => setFormPatient({ ...formPatient, person: { ...formPatient.person, fullName: e.target.value } })} />

                    <Label htmlFor="birthdate">Nascimento</Label>
                    <Input type="date" name="birthdate" id="birthdate" defaultValue={formPatient.person?.birthdate ?? null} onChange={(e) => setFormPatient({ ...formPatient, person: { ...formPatient.person, birthdate: e.target.value } })} />

                    <Label htmlFor="cpfNumber">CPF</Label>
                    <Input type="name" name="cpfNumber" id="cpfNumber" defaultValue={formPatient.person?.cpfNumber ?? null} onChange={(e) => setFormPatient({ ...formPatient, person: { ...formPatient.person, cpfNumber: e.target.value } })} />

                    <Label htmlFor="telephoneNumber">Celular</Label>
                    <Input type="number" name="telephoneNumber" id="telephoneNumber" defaultValue={formPatient.person?.telephoneNumber ?? null} onChange={(e) => setFormPatient({ ...formPatient, person: { ...formPatient.person, telephoneNumber: e.target.value } })} />

                    <Label htmlFor="emailAddress">Email</Label>
                    <Input type="email" name="emailAddress" id="emailAddress" defaultValue={formPatient.person?.emailAddress ?? null} onChange={(e) => setFormPatient({ ...formPatient, person: { ...formPatient.person, emailAddress: e.target.value } })} />

                    <Label htmlFor="mainAddress">Endereço</Label>
                    <Input type="text" name="mainAddress" id="mainAddress" defaultValue={formPatient.person?.address?.mainAddress ?? null} onChange={(e) => setFormPatient({
                        ...formPatient, person: {
                            ...formPatient.person, address: {
                                ...formPatient.person.address, mainAddress: e.target.value
                            }
                        }
                    })} />

                    <Label htmlFor="numberAddress">Número</Label>
                    <Input type="text" name="numberAddress" id="numberAddress" defaultValue={formPatient.person?.address?.numberAddress ?? null} onChange={(e) => setFormPatient({
                        ...formPatient, person: {
                            ...formPatient.person, address: {
                                ...formPatient.person.address, numberAddress: e.target.value
                            }
                        }
                    })} />

                    <Label htmlFor="neighborHood">Bairro</Label>
                    <Input type="text" name="neighborHood" id="neighborHood" defaultValue={formPatient.person?.address?.neighborHood ?? null} onChange={(e) => setFormPatient({
                        ...formPatient, person: {
                            ...formPatient.person, address: {
                                ...formPatient.person.address, neighborHood: e.target.value
                            }
                        }
                    })} />

                    <Label htmlFor="complementInfo">Complemento</Label>
                    <Input type="text" name="complementInfo" id="complementInfo" defaultValue={formPatient.person?.address?.complementInfo ?? null} onChange={(e) => setFormPatient({
                        ...formPatient, person: {
                            ...formPatient.person, address: {
                                ...formPatient.person.address, complementInfo: e.target.value
                            }
                        }
                    })} />

                    <Label htmlFor="zipCode">CEP</Label>
                    <Input type="text" name="zipCode" id="zipCode" defaultValue={formPatient.person?.address?.zipCode ?? null} onChange={(e) => setFormPatient({
                        ...formPatient, person: {
                            ...formPatient.person, address: {
                                ...formPatient.person.address, zipCode: e.target.value
                            }
                        }
                    })} />

                    <Button type="submit">Salvar</Button>
                </>
            </Form>
        </Content>

    )
}

export default PatientsForm;