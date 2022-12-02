import { LoginModel } from "../models/LoginModel";
import api from "./Api"

export default class UserService {

    public async registerUser(formUser: LoginModel) {
        try {
            return await api.post("/api/v1/users", formUser)
        } catch (error) {
            console.log("a", error);
        }

    }
}