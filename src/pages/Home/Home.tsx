import { useNavigate } from 'react-router-dom';
import { ReactComponent as LoresLogo } from '../../assets/logofull.svg';
import { MAIN_COLOR } from '../../styles/constants/colors';
import { Content } from '../../styles/Content';
import { Fullpage } from '../../styles/Fullpage';
import { Button } from '../../styles/global/GlobalStyles';
import { HomeWrapper } from './HomeStyles';


const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <HomeWrapper>
                <Fullpage color={MAIN_COLOR}>
                    <Content maxWidth={true} height={true} direction="column" align='center'>
                        <LoresLogo />
                        <Button onClick={() => navigate("/register")}>Cadastrar usuário</Button>
                        <Button onClick={() => navigate("/login")}>Login</Button>
                    </Content>
                </Fullpage>
            </HomeWrapper>
        </>
    )
}

export default Home