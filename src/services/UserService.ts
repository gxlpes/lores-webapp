import { AUTH_ENDPOINT, REGISTER_ENDPOINT } from "../common/constants";
import { LoginPayload, RegisterPayload } from "../domain/payload/UserPayload";
import api from "./Api";

export default class UserService {
  public async registerUser(formUser: RegisterPayload) {
    try {
      return await api.post(REGISTER_ENDPOINT, formUser);
    } catch (error) {
      console.log(error);
    }
  }

  public async loginUser(formUser: LoginPayload) {
    try {
      return await api.post(AUTH_ENDPOINT, formUser);
    } catch (error) {
      console.log(error);
    }
  }
}
