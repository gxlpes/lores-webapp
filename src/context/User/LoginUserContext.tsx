import { createContext, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginUser } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import { LoginPayload } from "../../payload/UserPayload";
import UserService from "../../services/RegisterUserService";

export const LoginUserContext = createContext<ILoginUser>({} as ILoginUser);

export const LoginUserContextProvider = ({ children }: IChildren) => {
    const [userForm, setUserForm] = useState<LoginPayload>({} as LoginPayload);
    const userService = new UserService();
    const navigate = useNavigate();

    const handleUserLoginForm = (key: string, value: string) => {
        setUserForm({ ...userForm, [key]: value });
    }

    const loginWithCredentials = async () => {
        console.log(userForm);
        let response = await userService.loginUser(userForm);
        if (response?.status == 200) navigate("/appointments");
    }

    return (
        <LoginUserContext.Provider value={{ handleUserLoginForm, loginWithCredentials }}>{children}</LoginUserContext.Provider>
    )
}