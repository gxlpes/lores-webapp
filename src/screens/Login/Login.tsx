import { FormContainer, LoginWrapper, LogoContainer } from './LoginStyles'
import { ReactComponent as LoresLogo } from '../../assets/logofull.svg';
import { useContext } from 'react';
import { LoginContext } from '../../context/Login/LoginContext';


const Login = () => {
    const { setUsername, setPassword, loginWithCredentials } = useContext(LoginContext);

    return (
        <>
            <LoginWrapper>

                <LogoContainer>
                    <LoresLogo />
                </LogoContainer>

                <FormContainer>
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="name" name="name" id="name" onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={(e) => {
                        e.preventDefault()
                        loginWithCredentials()
                    }}>Entrar</button>
                </FormContainer>
            </LoginWrapper>
        </>
    )
}

export default Login