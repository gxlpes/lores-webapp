import { IChildren } from "../domain/interfaces/reactInterfaces";
import { LoginUserContextProvider } from "./User/LoginContext";
import { RegisterUserContextProvider } from "./User/RegisterContext";

const Providers = ({ children }: IChildren) => {
    return (
        <>
            <LoginUserContextProvider>
                <RegisterUserContextProvider>
                    {children}
                </RegisterUserContextProvider>
            </LoginUserContextProvider>
        </>
    );
};

export default Providers;