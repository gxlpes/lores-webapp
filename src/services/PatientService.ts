import { axiosPrivate } from "../api/axios";
import { PATIENTS_PAGE_ENDPOINT } from "../common/constants";
import { PersonPayload } from "../domain/payload/PersonPayload";
import { LoginPayload } from "../domain/payload/UserPayload";

export default class UserService {
  public async getAllPatients() {
    try {
      return await axiosPrivate.get(PATIENTS_PAGE_ENDPOINT);
    } catch (error) {
      console.log(error);
    }
  }

  public async savePatient(formPatient: PersonPayload) {
    try {
      let person = {
        person: formPatient,
      };
      console.log(person);

      return await axiosPrivate.post(PATIENTS_PAGE_ENDPOINT, person);
    } catch (error) {
      console.log(error);
    }
  }

  public async deletePatient(id: string) {
    try {
      return await axiosPrivate.delete(PATIENTS_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }
}
