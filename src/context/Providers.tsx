import { IChildren } from "../interfaces/reactInterfaces";
import { RegisterUserContextProvider } from "./Login/RegisterUserContext";

const Providers = ({ children }: IChildren) => {
    return (
        <>
            <RegisterUserContextProvider>{children}</RegisterUserContextProvider>
        </>
    );
};

export default Providers;