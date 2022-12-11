import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { getLocalStorage } from '../../common/localStorage';
import { Row, RowHeader } from '../../components/Row/Row';
import Subheader from '../../components/Subheader/Subheader';
import { AppointmentContext } from '../../context/AppointmentContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';

const Appointments = () => {
    const { allAppointments, saveMethodItem, setFormAppointment, updateMethodItem, createNewAppointment, formAppointment, deleteMethodItem } = useContext(AppointmentContext);
    console.log(allAppointments, "all appointments");
    return (
        <>
            <Fullpage color={WHITE_COLOR}>
                <Content maxWidth={true} direction="column" align='flex-start' justify='center'>

                    {allAppointments !== "No appointments were found" ? (
                        <>
                            <>
                                <RowHeader>
                                    <p>Data</p>
                                    <p>Dentista</p>
                                    <p>Paciente</p>
                                    <p>Especialidade</p>
                                    <p>Procedimento</p>
                                    <p>Motivo</p>
                                    {getLocalStorage("auth", "role") == 1 ? (
                                        <Content maxWidth={false}>
                                            <AiFillDelete />
                                            <FaEdit />
                                        </Content>
                                    ) : undefined}

                                </RowHeader>
                            </>

                            {allAppointments.map((el: any) => (
                                <>
                                    <Row>
                                        <p>{el.dateAppointment}</p>
                                        <p>{el.dentist.person.fullName}</p>
                                        <p>{el.patient.person.fullName}</p>
                                        <p>{el.treatment.fieldOfSpecialty}</p>
                                        <p>{el.treatment.procedureName}</p>
                                        <p>{el.reason}</p>
                                        {getLocalStorage("auth", "role") == 1 ? (
                                            <Content maxWidth={false}>
                                                <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                                <FaEdit onClick={() => updateMethodItem!(el.id)} />
                                            </Content>
                                        ) : undefined}
                                    </Row>
                                </>
                            ))}
                        </>
                    )
                        : (<p>Nenhuma consulta cadastrada</p>)}

                </Content>
            </Fullpage>
        </>
    )
}

export default Appointments;