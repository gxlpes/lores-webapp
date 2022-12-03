import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterUser } from "../../domain/interfaces/contextInterfaces";
import { IChildren } from "../../domain/interfaces/reactInterfaces";
import { RegisterPayload } from "../../domain/payload/UserPayload";
import UserService from "../../services/UserService";

export const RegisterUserContext = createContext<IRegisterUser>({} as IRegisterUser);

export const RegisterUserContextProvider = ({ children }: IChildren) => {
    const [userForm, setUserForm] = useState<RegisterPayload>({} as RegisterPayload);
    const userService = new UserService();
    const navigate = useNavigate();

    const registerWithCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await userService.registerUser(userForm);
        if (response?.status == 200) navigate("/login")
    }

    return (
        <RegisterUserContext.Provider value={{
            userForm,
            setUserForm,
            registerWithCredentials
        }}>{children}</RegisterUserContext.Provider>
    )
}