import { ReactComponent as LoresLogo } from "../../assets/logofull.svg";
import { MAIN_COLOR, SEC_COLOR, WHITE_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Dot, DotContainer } from '../../styles/Dot';
import { Fullpage } from '../../styles/Fullpage';
import LoginForm from './LoginForm';
import { HeaderLogin, LoginSection, LoginUserWrapper } from './LoginUserStyles';

const LoginUser = () => {

    return (
        <>
            <LoginUserWrapper>
                <Content maxWidth={false} direction="row">
                    <Fullpage color={MAIN_COLOR}>
                        <Content height={true} maxWidth={true}>
                            <LoresLogo />
                        </Content>
                    </Fullpage>

                    <Fullpage color={WHITE_COLOR}>
                        <Content height={true} maxWidth={true}>
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