import { createContext, useState } from "react";
import { ILogin } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import axios from "axios";

export const LoginContext = createContext<ILogin>({} as ILogin);

export const LoginContextProvider = ({ children }: IChildren) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const loginWithCredentials = () => {
        axios.post("/auth", {
            username: username,
            password: password
        })
            .then(() => console.log("ok"))
            .catch((err: string) => console.log(err))
    }










    return (
        <LoginContext.Provider value={{ setUsername, setPassword, loginWithCredentials }}>{children}</LoginContext.Provider>
    )
}