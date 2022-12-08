import { useContext } from 'react';
import { Row } from '../../components/Row/Row';
import { PatientContext } from '../../context/PatientContext';
import { Patient } from '../../domain/interfaces/entities/PatientInterface';
import { Content } from '../../styles/Content';
import PatientsForm from './PatientsForm';
import { AiFillDelete } from "react-icons/ai"
import { FaEdit } from "react-icons/fa"
import { Button } from '../../styles/global/GlobalStyles';
import { useNavigate } from 'react-router-dom';

const Patients = () => {
    const { allPatients, deleteMethodItem, updateMethodItem, createNewPatient } = useContext(PatientContext);

    return (
        <>
            <Content maxWidth={false} direction="column" align='flex-start' justify='center'>
                <Button onClick={() => createNewPatient()}>Cadastrar</Button>
                {
                    allPatients.map((el: Patient) => (
                        <>
                            <Row>
                                <p>{el.id}</p>
                                <p>{el.person.fullName}</p>
                                <p>{el.person.cpfNumber}</p>
                                <p>{el.person.birthdate}</p>
                                <p>{el.person.telephoneNumber}</p>
                                <p>{el.person.emailAddress}</p>
                                <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                <FaEdit onClick={() => updateMethodItem!(el.id)} />
                            </Row>
                        </>
                    ))
                }
            </Content>
        </>
    )
}

export default Patients