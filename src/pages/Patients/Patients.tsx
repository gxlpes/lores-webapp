import { useContext } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Row, RowHeader } from '../../components/Row/Row';
import Subheader from '../../components/Subheader/Subheader';
import { PatientContext } from '../../context/PatientContext';
import { Patient } from '../../domain/interfaces/entities/PatientInterface';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import { PatientsWrapper } from './PatientsStyles';

const Patients = () => {
    const { allPatients, deleteMethodItem, updateMethodItem, createNewPatient } = useContext(PatientContext);
    console.log(allPatients)
    return (
        <>
            <PatientsWrapper>
                <Fullpage color={WHITE_COLOR}>
                    <Content maxWidth={true} direction="column" align='flex-start' justify='center'>
                        <Subheader createNew={createNewPatient} />
                        <RowHeader>
                            <p>Id</p>
                            <p>Nome</p>
                            <p>CPF</p>
                            <p>Nascimento</p>
                            <p>Celular</p>
                            <p>Email</p>
                        </RowHeader>

                        {allPatients != "No patients were found" ? (allPatients.map((el: Patient) => (
                            <>
                                <Row>
                                    <p>{el.id}</p>
                                    <p>{el.person.fullName}</p>
                                    <p>{el.person.cpfNumber}</p>
                                    <p>{el.person.birthdate}</p>
                                    <p>{el.person.telephoneNumber}</p>
                                    <p>{el.person.emailAddress}</p>
                                    <Content maxWidth={false}>
                                        <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                        <FaEdit onClick={() => updateMethodItem!(el.id)} />
                                    </Content>
                                </Row>
                            </>
                        ))) : (<p>Sem pacientes</p>)}

                    </Content>
                </Fullpage>
            </PatientsWrapper>
        </>
    )
}

export default Patients