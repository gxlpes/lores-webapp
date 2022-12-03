import { LoginPayload, RegisterPayload } from "../payload/UserPayload";
import api from "./Api";

export default class UserService {
  public async getAllPatients(formUser: RegisterPayload) {
    try {
      return await api.post("/api/users", formUser);
    } catch (error) {
      console.log(error);
    }
  }

  public async savePatient(formUser: LoginPayload) {
    try {
      return await api.post("/api/auth", formUser);
    } catch (error) {
      console.log(error);
    }
  }

  public async getPatient(formUser: LoginPayload) {
    try {
      return await api.post("/api/auth", formUser);
    } catch (error) {
      console.log(error);
    }
  }
}
