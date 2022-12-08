import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { AppointmentContext } from '../../context/AppointmentContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles'

const AppointmentsForm = () => {
    const location = useLocation();
    const afterLastSlash = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const { allAppointments, saveMethodItem, setFormAppointment, formAppointment, saveUpdatedMethodItem, deleteMethodItem } = useContext(AppointmentContext);

    return (
        <Form padding={true} width={"100vw"} shadow={false} color={WHITE_COLOR}
            onSubmit={(e) => formAppointment.id ? saveUpdatedMethodItem!(e, afterLastSlash) : saveMethodItem(e)}>
            <>
                <Label htmlFor="idDentist">Dentista</Label>
                <Input type="text" name="idDentist" id="idDentist" onChange={(e) => setFormAppointment({ ...formAppointment, dentist: { ...formAppointment.dentist, id: e.target.value } })} />

                <Label htmlFor="idPatient">Paciente</Label>
                <Input type="text" name="idPatient" id="idPatient" onChange={(e) => setFormAppointment({ ...formAppointment, patient: { ...formAppointment.patient, id: e.target.value } })} />

                <Label htmlFor="idAppointment">Tratamento</Label>
                <Input type="text" name="idAppointment" id="idAppointment" onChange={(e) => setFormAppointment({ ...formAppointment, treatment: { ...formAppointment.treatment, id: e.target.value } })} />

                <Label htmlFor="idAppointments">Data</Label>
                <Input type="date" name="idDentist" id="idDentist" onChange={(e) => setFormAppointment({ ...formAppointment, dateAppointment: e.target.value })} />

                <Label htmlFor="reason">Razão</Label>
                <Input type="text" name="reason" id="reason" onChange={(e) => setFormAppointment({ ...formAppointment, reason: e.target.value })} />

                <Button type="submit">Salvar</Button>
            </>
        </Form>)
}

export default AppointmentsForm