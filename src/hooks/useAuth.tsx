import { useContext } from "react";
import { LoginUserContext } from "../context/User/LoginUserContext";

const useAuth = () => {
    return useContext(LoginUserContext);
}

export default useAuth;