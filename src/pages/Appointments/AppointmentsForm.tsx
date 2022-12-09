import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getAfterSlash } from '../../common/getAfterSlash';
import { AppointmentContext } from '../../context/AppointmentContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles';

const AppointmentsForm = () => {
    const location = useLocation();
    const idPath = getAfterSlash(location.pathname);
    const { allAppointments, saveMethodItem, setFormAppointment, formAppointment, setDentistCro, saveUpdatedMethodItem, setPatientCpf } = useContext(AppointmentContext);

    return (
        <Content maxWidth={true} direction="column" align="flex-start" justify="center">
            <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
                onSubmit={(e) => idPath.length > 10 ? saveUpdatedMethodItem!(e, idPath) : saveMethodItem(e)}>
                <>
                    <Label htmlFor="idDentist">Dentista</Label>
                    <Input type="text" name="idDentist" id="idDentist" onBlur={(e) => setDentistCro(e.target.value)} />

                    <Label htmlFor="idPatient">Paciente</Label>
                    <Input type="text" name="idPatient" id="idPatient" onChange={(e) => setPatientCpf(e.target.value)} />

                    <Label htmlFor="idAppointment">Tratamento</Label>
                    <Input type="text" name="idAppointment" id="idAppointment" onChange={(e) => setFormAppointment({ ...formAppointment, treatment: { ...formAppointment.treatment, id: e.target.value } })} />

                    <Label htmlFor="idAppointments">Data</Label>
                    <Input type="date" name="idDentist" id="idDentist" onChange={(e) => setFormAppointment({ ...formAppointment, dateAppointment: e.target.value })} />

                    <Label htmlFor="reason">Razão</Label>
                    <Input type="text" name="reason" id="reason" onChange={(e) => setFormAppointment({ ...formAppointment, reason: e.target.value })} />

                    <Button type="submit">Salvar</Button>
                </>
            </Form>
        </Content>
    )
}

export default AppointmentsForm