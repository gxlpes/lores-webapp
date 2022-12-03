import React, { useContext } from 'react'
import { LoginUserContext } from '../../context/User/LoginUserContext';

const LoginUser = () => {
    const { handleUserLoginForm, loginWithCredentials } = useContext(LoginUserContext);

    return (
        <form>
            <label htmlFor="username">Nome de usuário</label>
            <input type="name" name="name" id="name" onChange={(e) => handleUserLoginForm("username", e.target.value)} />

            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" onChange={(e) => handleUserLoginForm("password", e.target.value)} />

            <button onClick={(e) => {
                e.preventDefault()
                loginWithCredentials()
            }}>Entrar</button>
        </form>
    )
}

export default LoginUser;