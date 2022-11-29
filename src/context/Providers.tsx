import { IChildren } from "../interfaces/reactInterfaces";
import { LoginContextProvider } from "./Login/LoginContext";

const Providers = ({ children }: IChildren) => {
    return (
        <>
            <LoginContextProvider>{children}</LoginContextProvider>
        </>
    );
};

export default Providers;