import React, { useContext } from 'react'
import { LoginUserContext } from '../../context/User/LoginContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles';

const LoginForm = () => {
    const { setUserForm, userForm, loginWithCredentials } = useContext(LoginUserContext);

    return (
        <Form padding={false} shadow={false} color={WHITE_COLOR} onSubmit={(e) => loginWithCredentials(e)}>

            <Label htmlFor="username">Nome de usuário</Label>
            <Input type="name" name="name" id="name" onChange={(e) => setUserForm({ ...userForm, ["username"]: e.target.value })} />

            <Label htmlFor="password">Senha</Label>
            <Input type="password" name="password" id="password" onChange={(e) => setUserForm({ ...userForm, ["password"]: e.target.value })} />

            <Button type="submit">Entrar</Button>
        </Form>
    )
}

export default LoginForm