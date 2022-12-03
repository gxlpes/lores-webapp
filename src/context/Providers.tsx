import { IChildren } from "../domain/interfaces/reactInterfaces";
import { PatientContextProvider } from "./PatientContext";
import { LoginUserContextProvider } from "./User/LoginUserContext";
import { RegisterUserContextProvider } from "./User/RegisterUserContext";

const Providers = ({ children }: IChildren) => {
    return (
        <>
            <PatientContextProvider>
                <LoginUserContextProvider>
                    <RegisterUserContextProvider>{children}</RegisterUserContextProvider>
                </LoginUserContextProvider>
            </PatientContextProvider>
        </>
    );
};

export default Providers;