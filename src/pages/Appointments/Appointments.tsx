import { useContext } from 'react';
import { AppointmentContext } from '../../context/AppointmentContext';

const Appointments = () => {
    const { allAppointments, saveMethodItem, setFormAppointment, formAppointment, deleteMethodItem } = useContext(AppointmentContext);
    console.log(allAppointments);
    return (
        <>
            <form onSubmit={(e) => saveMethodItem(e)}>
                <>
                    <label htmlFor="idDentist">Dentista</label>
                    <input type="text" name="idDentist" id="idDentist" onChange={(e) => setFormAppointment({ ...formAppointment, dentistId: e.target.value })} />

                    <label htmlFor="idPatient">Paciente</label>
                    <input type="text" name="idPatient" id="idPatient" onChange={(e) => setFormAppointment({ ...formAppointment, patientId: e.target.value })} />

                    <label htmlFor="idAppointment">Consulta</label>
                    <input type="text" name="idAppointment" id="idAppointment" onChange={(e) => setFormAppointment({ ...formAppointment, treatmentId: e.target.value })} />

                    <label htmlFor="idAppointments">Data</label>
                    <input type="date" name="idDentist" id="idDentist" onChange={(e) => setFormAppointment({ ...formAppointment, dateAppointment: e.target.value })} />

                    <label htmlFor="reason">Razão</label>
                    <input type="text" name="reason" id="reason" onChange={(e) => setFormAppointment({ ...formAppointment, reason: e.target.value })} />

                    <button type="submit">Salvar</button>
                </>
            </form>

            {/* {
                typeof allAppointments == "string" ? (<p>Opa, sem especialidade</p>) : (<>
                    {
                        allAppointments!.map((el: any) => (
                            <>
                                <p>{el.title}</p>
                                <a style={{ cursor: "pointer" }} onClick={() => deleteMethodItem(el.id)}>Excluir</a>
                            </>
                        ))
                    }</>)
            } */}
        </>
    )
}

export default Appointments;