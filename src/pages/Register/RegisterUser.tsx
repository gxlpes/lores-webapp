import { FormContainer, RegisterWrapper, LogoContainer } from './RegisterUserStyles'
import { ReactComponent as LoresLogo } from '../../assets/logofull.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUserContext } from '../../context/User/RegisterContext';


const RegisterUser = () => {
    const { setUserForm, userForm, registerWithCredentials } = useContext(RegisterUserContext);

    return (
        <>
            <RegisterWrapper>

                <LogoContainer>
                    <LoresLogo />
                </LogoContainer>

                <FormContainer onSubmit={(e) => registerWithCredentials(e)}>
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="name" name="name" id="name" onChange={(e) => setUserForm({ ...userForm, ["username"]: e.target.value })}
                    />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" onChange={(e) => setUserForm({ ...userForm, ["password"]: e.target.value })} />

                    <label htmlFor="retypepassword">Redigite a sua senha</label>
                    <input type="password" name="retypepassword" id="retypepassword" onChange={(e) => setUserForm({ ...userForm, ["retypePassword"]: e.target.value })} />


                    <input type="radio" id="user" name="user" value="2" onChange={(e) => setUserForm({ ...userForm, ["roleName"]: e.target.value })} />
                    <label htmlFor="user">Usuário</label>

                    <input type="radio" id="admin" name="admin" value="1" onChange={(e) => setUserForm({ ...userForm, ["roleName"]: e.target.value })} />
                    <label htmlFor="admin">Administrador</label>


                    <button>Cadastrar</button>
                </FormContainer>
            </RegisterWrapper >
        </>
    )
}

export default RegisterUser;