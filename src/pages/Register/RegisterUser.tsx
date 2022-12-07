import { useContext } from 'react';
import { RegisterUserContext } from '../../context/User/RegisterContext';
import { MAIN_COLOR, SEC_COLOR, WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Dot, DotContainer } from '../../styles/Dot';
import { Fullpage } from '../../styles/Fullpage';
import RegisterForm from './RegisterForm';
import { HeaderRegister, RegisterUserWrapper } from './RegisterUserStyles';

const RegisterUser = () => {
    return (
        <>
            <RegisterUserWrapper>
                <Fullpage color={SEC_COLOR}>
                    <Content direction="column">
                        <HeaderRegister>
                            <h3>Cadastrar usuário</h3>
                            <DotContainer>
                                <Dot color={MAIN_COLOR} />
                                <Dot color={WHITE_COLOR} />
                            </DotContainer>
                        </HeaderRegister>
                        <RegisterForm />
                    </Content>
                </Fullpage>
            </RegisterUserWrapper >
        </>
    )
}

export default RegisterUser;