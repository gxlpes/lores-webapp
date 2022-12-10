import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Row, RowHeader } from '../../components/Row/Row';
import Subheader from '../../components/Subheader/Subheader';
import { DentistContext } from '../../context/DentistContext';
import { Dentist } from '../../domain/interfaces/entities/DentistInterface';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import { DentistsWrapper } from "./DentistsStyles";

const Dentists = () => {
    const { allDentists, deleteMethodItem, updateMethodItem, createNewDentist } = useContext(DentistContext);

    return (
        <>
            <DentistsWrapper>
                <Fullpage color={WHITE_COLOR}>
                    <Content maxWidth={true} direction="column" align='flex-start' justify='center'>
                        <Subheader createNew={createNewDentist} />

                        {allDentists !== "No dentists were found" ? (
                            <>
                                <>
                                    <RowHeader>
                                        <p>CRO</p>
                                        <p>Especialidade</p>
                                        <p>Nome</p>
                                        <p>CPF</p>
                                        <p>Nascimento</p>
                                        <p>Celular</p>
                                        <p>Email</p>
                                        <Content maxWidth={false}>
                                            <AiFillDelete />
                                            <FaEdit />
                                        </Content>
                                    </RowHeader>
                                </>


                                {allDentists.map((el: Dentist) => (
                                    <>
                                        <Row>
                                            <p>{el.croNumber}</p>
                                            <p>{el.specialties[0]?.title}</p>
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
                                ))}
                            </>
                        ) : (<p>Sem dentistas</p>)}

                    </Content>
                </Fullpage>
            </DentistsWrapper>
        </>
    )
}

export default Dentists