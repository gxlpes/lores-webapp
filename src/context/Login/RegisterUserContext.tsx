import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterUser } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import { LoginModel } from "../../models/LoginModel";
import UserService from "../../services/RegisterUserService";

export const RegisterUserContext = createContext<IRegisterUser>({} as IRegisterUser);

export const RegisterUserContextProvider = ({ children }: IChildren) => {
    const userService = new UserService();
    const [userForm, setUserForm] = useState<LoginModel>({} as LoginModel);

    const handleUserForm = (key: string, value: string) => {
        setUserForm({ ...userForm, [key]: value });
    }

    const registerWithCredentials = async () => {
        console.log(userForm);
        let response = await userService.registerUser(userForm);
        console.log(response);
    }

    return (
        <RegisterUserContext.Provider value={{ handleUserForm, registerWithCredentials }}>{children}</RegisterUserContext.Provider>
    )
}