import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ENDPOINT } from "../../common/constants";
import { saveLocalStorage } from "../../common/localStorage";
import { ILoginUser } from "../../domain/interfaces/contextInterfaces";
import { IChildren } from "../../domain/interfaces/reactInterfaces";
import { LoginPayload } from "../../domain/payload/UserPayload";
import UserService from "../../services/UserService";

export const LoginUserContext = createContext<ILoginUser>({} as ILoginUser);

export const LoginUserContextProvider = ({ children }: IChildren) => {
    const [userForm, setUserForm] = useState<LoginPayload>({} as LoginPayload);
    const [auth, setAuth] = useState<any>({});
    const userService = new UserService();
    const navigate = useNavigate();

    const loginWithCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let response = await userService.loginUser(userForm);
        if (response?.status == 200) navigate(MAIN_PAGE_ENDPOINT);
        saveLocalStorage(response?.data.token);
        return setAuth(response?.data)
    }

    return (
        <LoginUserContext.Provider value={{
            auth,
            setAuth,
            userForm,
            setUserForm,
            loginWithCredentials
        }}>{children}</LoginUserContext.Provider>
    )
}