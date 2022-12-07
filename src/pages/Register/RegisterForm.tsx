import { useContext } from 'react';
import { RegisterUserContext } from '../../context/User/RegisterContext';
import { Button, Input, Label } from '../../styles/global/GlobalStyles';
import { FormContainer } from './RegisterUserStyles';

const RegisterForm = () => {
    const { setUserForm, userForm, registerWithCredentials } = useContext(RegisterUserContext);

    return (
        <FormContainer onSubmit={(e) => registerWithCredentials(e)}>

            <Label htmlFor="name">Nome de usuário</Label>
            <Input type="name" name="name" id="name" onChange={(e) => setUserForm({ ...userForm, ["username"]: e.target.value })}
            />

            <Label htmlFor="password">Senha</Label>
            <Input type="password" name="password" id="password" onChange={(e) => setUserForm({ ...userForm, ["password"]: e.target.value })} />

            <Label htmlFor="retypepassword">Redigite a sua senha</Label>
            <Input type="password" name="retypepassword" id="retypepassword" onChange={(e) => setUserForm({ ...userForm, ["retypePassword"]: e.target.value })} />


            <Label htmlFor="user">
                <Input type="radio" id="user" name="role" value="2" onChange={(e) => setUserForm({ ...userForm, ["roleName"]: e.target.value })} />
                Usuário
            </Label>

            <Label htmlFor="admin">
                <Input type="radio" id="admin" name="role" value="1" onChange={(e) => setUserForm({ ...userForm, ["roleName"]: e.target.value })} />
                Administrador
            </Label>


            <Button>Cadastrar</Button>

        </FormContainer>
    )
}

export default RegisterForm