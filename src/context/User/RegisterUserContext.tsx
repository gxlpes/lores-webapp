import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterUser } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import { RegisterPayload } from "../../payload/UserPayload";
import UserService from "../../services/RegisterUserService";

export const RegisterUserContext = createContext<IRegisterUser>({} as IRegisterUser);

export const RegisterUserContextProvider = ({ children }: IChildren) => {
    const [userForm, setUserForm] = useState<RegisterPayload>({} as RegisterPayload);
    const userService = new UserService();
    const navigate = useNavigate();

    const handleRegisterUserForm = (key: string, value: string) => {
        setUserForm({ ...userForm, [key]: value });
    }

    const registerWithCredentials = async () => {
        console.log(userForm);
        let response = await userService.registerUser(userForm);
        if (response?.status == 200) navigate("/login")
    }

    return (
        <RegisterUserContext.Provider value={{ handleRegisterUserForm, registerWithCredentials }}>{children}</RegisterUserContext.Provider>
    )
}