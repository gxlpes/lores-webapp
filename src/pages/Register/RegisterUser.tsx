import { FormContainer, RegisterWrapper, LogoContainer } from './RegisterUserStyles'
import { ReactComponent as LoresLogo } from '../../assets/logofull.svg';
import { useContext } from 'react';
import { RegisterUserContext } from '../../context/User/RegisterUserContext';
import { useNavigate } from 'react-router-dom';


const RegisterUser = () => {
    const { handleRegisterUserForm, registerWithCredentials } = useContext(RegisterUserContext);

    return (
        <>
            <RegisterWrapper>

                <LogoContainer>
                    <LoresLogo />
                </LogoContainer>

                <FormContainer >
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="name" name="name" id="name" onChange={(e) => handleRegisterUserForm("username", e.target.value)} />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" onChange={(e) => handleRegisterUserForm("password", e.target.value)} />

                    <label htmlFor="retypepassword">Redigite a sua senha</label>
                    <input type="password" name="retypepassword" id="retypepassword" onChange={(e) => handleRegisterUserForm("retypePassword", e.target.value)} />


                    <input type="radio" id="user" name="user" value="2" onChange={(e) => handleRegisterUserForm("roleName", e.target.value)} />
                    <label htmlFor="user">Usuário</label>

                    <input type="radio" id="admin" name="admin" value="1" onChange={(e) => handleRegisterUserForm("roleName", e.target.value)} />
                    <label htmlFor="admin">Administrador</label>


                    <button onClick={(e) => {
                        e.preventDefault()
                        registerWithCredentials()
                    }}>Cadastrar</button>
                </FormContainer>
            </RegisterWrapper >
        </>
    )
}

export default RegisterUser;