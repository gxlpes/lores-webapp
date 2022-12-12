import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit, FaEllipsisH } from 'react-icons/fa';
import { RowHeader, Row } from '../../components/Row/Row';
import Subheader from '../../components/Subheader/Subheader';
import { TreatmentContext } from '../../context/TreatmentContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';

const Treatments = () => {
    const { allTreatments, deleteMethodItem, createNewTreatment, updateMethodItem } = useContext(TreatmentContext);

    return (
        <>
            <Fullpage color={WHITE_COLOR}>
                <Content maxWidth={true} direction="column" align='flex-start' justify='center'>

                    {allTreatments != "No treatments were found" ? (
                        <>
                            <>
                                <RowHeader>
                                    <p>Id</p>
                                    <p>Preço</p>
                                    <p>Descrição</p>
                                    <p>Campo de atuação</p>
                                    <p>Especialidade</p>
                                </RowHeader>
                            </>

                            <>
                                {allTreatments!.map((el: any) => (
                                    <>
                                        <Row>
                                            <p>{el.id}</p>
                                            <p>{el.priceAppointment}</p>
                                            <p>{el.procedureName}</p>
                                            <p>{el.fieldOfSpecialty}</p>
                                            <p>{el.specialty?.title}</p>
                                            <Content maxWidth={false}>
                                                <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                                <FaEdit onClick={() => updateMethodItem!(el.id)} />
                                            </Content>
                                        </Row>
                                    </>
                                ))}
                            </>
                        </>)
                        : (<p>Nenhum tratamento cadastrado</p>)}

                </Content>
            </Fullpage>
        </>
    )
}

export default Treatments;