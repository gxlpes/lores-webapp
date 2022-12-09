import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getAfterSlash } from '../../common/getAfterSlash';
import { AppointmentContext } from '../../context/AppointmentContext';
import { DentistContext } from '../../context/DentistContext';
import { TreatmentContext } from '../../context/TreatmentContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Button, Form, Input, Label, Option, Select } from '../../styles/global/GlobalStyles';

const AppointmentsForm = () => {
    const location = useLocation();
    const idPath = getAfterSlash(location.pathname);
    const { saveMethodItem, setFormAppointment, formAppointment, saveUpdatedMethodItem, setPatientCpf } = useContext(AppointmentContext);
    const { allDentists } = useContext(DentistContext);
    const { allTreatments } = useContext(TreatmentContext);

    console.log("appointments", formAppointment)

    return (
        <Content maxWidth={true} direction="column" align="flex-start" justify="center">
            <Form padding={true} width={"100%"} shadow={false} color={WHITE_COLOR}
                onSubmit={(e) => idPath.length > 10 ? saveUpdatedMethodItem!(e, idPath) : saveMethodItem(e)}>
                <>
                    <Label htmlFor="idDentist">Dentista</Label>
                    <Select onChange={(e) => setFormAppointment({ ...formAppointment, dentist: { ...formAppointment.dentist, id: e.target.value } })}>
                        {allDentists !== undefined ? (
                            (
                                allDentists.map((el: any) => (
                                    <Option value={el.id}>{el.person.fullName} - CRO {el.croNumber}</Option>
                                ))
                            )
                        ) : (<p>Sem treatment</p>)}
                    </Select>

                    <Label htmlFor="idPatient">Paciente</Label>
                    <Input type="text" name="idPatient" id="idPatient" defaultValue={formAppointment.patient.person?.fullName ?? null}
                        onChange={(e) => setPatientCpf(e.target.value)} />

                    <Label htmlFor="idAppointment">Tratamento</Label>
                    <Select
                        defaultValue="a"
                        onChange={(e) => setFormAppointment({ ...formAppointment, treatment: { ...formAppointment.treatment, id: e.target.value } })}>
                        {allTreatments !== undefined} <Option value={formAppointment.treatment.fieldOfSpecialty + '-' + formAppointment.treatment.procedureName}>{formAppointment.treatment.fieldOfSpecialty + ' - ' + formAppointment.treatment.procedureName}</Option>
                        {allTreatments !== undefined ? (
                            (
                                allTreatments.map((el: any) => (
                                    <Option value={el.id}>{el.fieldOfSpecialty} - CRO {el.procedureName}</Option>
                                ))
                            )
                        ) : (<p>Sem treatment</p>)}
                    </Select>

                    <Label htmlFor="idAppointments">Data</Label>
                    <Input type="date" name="idDentist" id="idDentist" defaultValue={formAppointment.dateAppointment ?? null}
                        onChange={(e) => setFormAppointment({ ...formAppointment, dateAppointment: e.target.value })} />

                    <Label htmlFor="reason">Razão</Label>
                    <Input type="text" name="reason" id="reason" defaultValue={formAppointment.reason ?? null}
                        onChange={(e) => setFormAppointment({ ...formAppointment, reason: e.target.value })} />

                    <Button type="submit">Salvar</Button>
                </>
            </Form>
        </Content>
    )
}

export default AppointmentsForm