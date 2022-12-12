import { useContext } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Row, RowHeader } from '../../components/Row/Row';
import { PatientContext } from '../../context/PatientContext';
import { Patient } from '../../domain/interfaces/entities/PatientInterface';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import { PatientsFormWrapper } from './PatientsStyles';

const Patients = () => {
    const { allPatients, deleteMethodItem, updateMethodItem, createNewPatient } = useContext(PatientContext);
    return (
        <>
            <PatientsFormWrapper>
                <Fullpage color={WHITE_COLOR}>
                    <Content maxWidth={true} direction="column" align='flex-start' justify='center'>

                        {allPatients !== "No patients were found" ? (
                            <>
                                <>
                                    <RowHeader>
                                        <p>CPF</p>
                                        <p>Nome</p>
                                        <p>Nascimento</p>
                                        <p>Celular</p>
                                        <p>Email</p>
                                        <Content maxWidth={false}>
                                            <AiFillDelete />
                                            <FaEdit />
                                        </Content>
                                    </RowHeader>
                                </>

                                {allPatients.map((el: Patient) => (
                                    <>
                                        <Row>
                                            <p>{el.person?.cpfNumber}</p>
                                            <p>{el.person?.fullName}</p>
                                            <p>{el.person?.birthdate}</p>
                                            <p>{el.person?.telephoneNumber}</p>
                                            <p>{el.person?.emailAddress}</p>
                                            <Content maxWidth={false}>
                                                <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                                <FaEdit onClick={() => updateMethodItem!(el.id)} />
                                            </Content>
                                        </Row>
                                    </>
                                ))}
                            </>
                        ) : (<p>Sem pacientes</p>)}

                    </Content>
                </Fullpage>
            </PatientsFormWrapper>
        </>
    )
}

export default Patients