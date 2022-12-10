import { useContext } from 'react';
import { countThings } from '../../common/countThings';
import { AppointmentContext } from '../../context/AppointmentContext';
import { DentistContext } from '../../context/DentistContext';
import { PatientContext } from '../../context/PatientContext';
import { SpecialtyContext } from '../../context/SpecialtyContext';
import { TreatmentContext } from '../../context/TreatmentContext';
import { MAIN_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import { Card, MainWrapper } from './MainStyles';
import { TbDental } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { BsLightbulb } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ReactComponent as BgLogo } from "../../assets/bg.svg";

const Main = () => {
    const { allAppointments } = useContext(AppointmentContext);
    const { allTreatments } = useContext(TreatmentContext);
    const { allSpecialties } = useContext(SpecialtyContext);
    const { allPatients } = useContext(PatientContext);
    const { allDentists } = useContext(DentistContext);

    return (
        <>
            <MainWrapper>
                <Fullpage color={MAIN_COLOR}>

                    <Content height={false} maxWidth={true} direction="column" align="flex-start" justify="center" gap="3rem">

                        <Card className="first">
                            <span className="counter">{countThings(allAppointments)}</span>
                            <p>Consultas agendadas</p>
                            <span className='icon'><TbDental /></span>
                            <BgLogo />
                        </Card>

                        <Content height={false} maxWidth={true} direction="row" align="flex-start" justify="center" gap="3rem">
                            <Content height={false} maxWidth={true} direction="column" align="flex-start" justify="center" gap="3rem">
                                <Card>
                                    <span className="counter">{countThings(allTreatments)}</span>
                                    <p>Tratamentos possíveis</p>
                                    <span className="icon"><MdOutlineHealthAndSafety /></span>
                                </Card>
                                <Card>
                                    <span className="counter">{countThings(allSpecialties)}</span>
                                    <p>Especialidades inscritas</p>
                                    <span className="icon"><BsLightbulb /></span>
                                </Card>
                            </Content>

                            <Content height={false} maxWidth={true} direction="column" align="flex-start" justify="center" gap="3rem">
                                <Card>
                                    <span className="counter">{countThings(allPatients)}</span>
                                    <p>Pacientes cadastrados</p>
                                    <span className="icon"><RxPerson /></span>
                                </Card>
                                <Card>
                                    <span className="counter">{countThings(allDentists)}</span>
                                    <p>Dentistas cadastrados</p>
                                    <span className="icon"><RxPerson /></span>
                                </Card>
                            </Content>
                        </Content>

                    </Content>
                </Fullpage>
            </MainWrapper>
        </>
    )
}

export default Main