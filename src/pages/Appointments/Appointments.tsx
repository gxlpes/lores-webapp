import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
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
                    <Subheader createNew={createNewAppointment} />

                    {allAppointments != "No appointments were found" ? (
                        <>
                            <RowHeader>
                                <p>Nome</p>
                            </RowHeader>
                        </> &&
                        (allAppointments.map((el: any) => (
                            <>
                                <Row>
                                    <p>a</p>
                                    <Content maxWidth={false}>
                                        <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                        <FaEdit onClick={() => updateMethodItem!(el.id)} />
                                    </Content>
                                </Row>
                            </>
                        )))) : (<p>Nenhuma consulta cadastrada</p>)}

                </Content>
            </Fullpage>
        </>
    )
}

export default Appointments;