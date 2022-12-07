import { useContext } from 'react';
import { LoginUserContext } from '../../context/User/LoginContext';
import { SEC_COLOR, MAIN_COLOR, WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { DotContainer, Dot } from '../../styles/Dot';
import { Fullpage, FullpageW } from '../../styles/Fullpage';
import LoginForm from './LoginForm';
import { HeaderLogin, LoginSection, LoginUserWrapper } from './LoginUserStyles';
import { ReactComponent as LoresLogo } from "../../assets/logofull.svg"

const LoginUser = () => {

    return (
        <>
            <LoginUserWrapper>
                <Content maxWidth={false} direction="row">
                    <Fullpage color={MAIN_COLOR}>
                        <Content maxWidth={true}>
                            <LoresLogo />
                        </Content>
                    </Fullpage>

                    <Fullpage color={WHITE_COLOR}>
                        <Content maxWidth={true}>
                            <LoginSection>
                                <HeaderLogin>
                                    <h3>Login</h3>
                                    <DotContainer>
                                        <Dot color={MAIN_COLOR} />
                                        <Dot color={SEC_COLOR} />
                                    </DotContainer>
                                </HeaderLogin>
                                <LoginForm />
                            </LoginSection>
                        </Content>
                    </Fullpage>

                </Content>
            </LoginUserWrapper >
        </>
    )
}

export default LoginUser;