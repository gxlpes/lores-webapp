import { useContext } from 'react';
import { RegisterUserContext } from '../../context/User/RegisterContext';
import { WHITE_COLOR } from '../../styles/constants/colors';
import { Button, Form, Input, Label } from '../../styles/global/GlobalStyles';

const RegisterForm = () => {
    const { setUserForm, userForm, registerWithCredentials } = useContext(RegisterUserContext);

    return (
        <Form padding={true} shadow={true} color={WHITE_COLOR} onSubmit={(e) => registerWithCredentials(e)}>

            <Label htmlFor="name">Nome de usuário</Label>
            <Input type="name" name="name" id="name" pattern="(?=\\s*\\S).*$)" onChange={(e) => setUserForm({ ...userForm, ["username"]: e.target.value })}
            />

            <Label htmlFor="password">Senha</Label>
            <Input type="password" name="password" id="password" pattern="(?=\\s*\\S).*$)" onChange={(e) => setUserForm({ ...userForm, ["password"]: e.target.value })} />

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


            <Button type="submit" className={Object.keys(userForm).length == 4 ? "valid" : undefined}>Cadastrar</Button>

        </Form>
    )
}

export default RegisterForm