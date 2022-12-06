import { useContext } from 'react';
import { LoginUserContext } from '../../context/User/LoginContext';

const LoginUser = () => {
    const { setUserForm, userForm, loginWithCredentials } = useContext(LoginUserContext);

    return (
        <form onSubmit={(e) => loginWithCredentials(e)}>
            <label htmlFor="username">Nome de usuário</label>
            <input type="name" name="name" id="name" onChange={(e) => setUserForm({ ...userForm, ["username"]: e.target.value })} />

            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" onChange={(e) => setUserForm({ ...userForm, ["password"]: e.target.value })} />

            <button type="submit">Entrar</button>
        </form>
    )
}

export default LoginUser;