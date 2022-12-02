import { FormContainer, LoginWrapper, LogoContainer } from './RegisterUserStyles'
import { ReactComponent as LoresLogo } from '../../assets/logofull.svg';
import { useContext } from 'react';
import { RegisterUserContext } from '../../context/Login/RegisterUserContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { handleUserForm, registerWithCredentials } = useContext(RegisterUserContext);
    const navigate = useNavigate();

    return (
        <>
            <LoginWrapper>

                <LogoContainer>
                    <LoresLogo />
                </LogoContainer>

                <FormContainer >
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="name" name="name" id="name" onChange={(e) => handleUserForm("username", e.target.value)} />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" onChange={(e) => handleUserForm("password", e.target.value)} />

                    <label htmlFor="retypepassword">Redigite a sua senha</label>
                    <input type="password" name="retypepassword" id="retypepassword" onChange={(e) => handleUserForm("retypePassword", e.target.value)} />


                    <input type="radio" id="user" name="user" value="2" onChange={(e) => handleUserForm("roleName", e.target.value)} />
                    <label htmlFor="user">Usuário</label>

                    <input type="radio" id="admin" name="admin" value="1" onChange={(e) => handleUserForm("roleName", e.target.value)} />
                    <label htmlFor="admin">Administrador</label>


                    <button onClick={(e) => {
                        e.preventDefault()
                        registerWithCredentials()
                    }}>Entrar</button>
                </FormContainer>
            </LoginWrapper>
        </>
    )
}

export default Login