import { api, axiosPrivate } from "../api/axios";
import { PATIENTS_PAGE_ENDPOINT } from "../common/constants";
import { LoginPayload } from "../domain/payload/UserPayload";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default class UserService {
  public async getAllPatients() {
    try {
      return await axiosPrivate.get(PATIENTS_PAGE_ENDPOINT);
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
