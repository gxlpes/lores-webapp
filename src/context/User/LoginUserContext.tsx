import { createContext, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ENDPOINT } from "../../common/constants";
import { ILoginUser } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import { LoginPayload } from "../../payload/UserPayload";
import UserService from "../../services/UserService";

export const LoginUserContext = createContext<ILoginUser>({} as ILoginUser);

export const LoginUserContextProvider = ({ children }: IChildren) => {
    const [userForm, setUserForm] = useState<LoginPayload>({} as LoginPayload);
    const userService = new UserService();
    const navigate = useNavigate();

    const loginWithCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let response = await userService.loginUser(userForm);
        if (response?.status == 200) navigate(MAIN_PAGE_ENDPOINT);
    }

    return (
        <LoginUserContext.Provider value={{
            userForm,
            setUserForm,
            loginWithCredentials
        }}>{children}</LoginUserContext.Provider>
    )
}