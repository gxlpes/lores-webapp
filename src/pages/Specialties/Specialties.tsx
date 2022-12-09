import React, { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Row, RowHeader } from '../../components/Row/Row';
import Subheader from '../../components/Subheader/Subheader';
import { PatientContext } from '../../context/PatientContext';
import { SpecialtyContext } from '../../context/SpecialtyContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import SpecialtiesForm from './SpecialtiesForm';
import { SpecialtiesWrapper } from './SpecialtiesStyles';

const Specialties = () => {
    const { allSpecialties, updateMethodItem, createNewSpecialty, deleteMethodItem } = useContext(SpecialtyContext);
    console.log("all", allSpecialties);

    return (
        <>
            <SpecialtiesWrapper>
                <Fullpage color={WHITE_COLOR}>
                    <Content maxWidth={true} direction="column" align='flex-start' justify='center'>
                        <Subheader createNew={createNewSpecialty} />


                        {allSpecialties != "No specialties were found" ? (
                            <>
                                <>
                                    <RowHeader>
                                        <p>Título</p>
                                    </RowHeader>
                                </>

                                {allSpecialties!.map((el: any) => (
                                    <>
                                        <Row>
                                            <p>{el.title}</p>
                                            <Content maxWidth={false}>
                                                <AiFillDelete onClick={() => deleteMethodItem(el.id)} />
                                                <FaEdit onClick={() => updateMethodItem!(el.id)} />
                                            </Content>
                                        </Row>
                                    </>
                                ))}
                            </>) : (<p>Nenhuma especialidade foi encontrada</p>)}

                    </Content>
                </Fullpage>
            </SpecialtiesWrapper>
        </>
    )
}

export default Specialties;