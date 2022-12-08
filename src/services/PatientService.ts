import { axiosPrivate } from "../api/axios";
import { PATIENTS_PAGE_ENDPOINT } from "../common/constants";
import { PatientPayload } from "../domain/payload/PatientPayload";

export default class UserService {
  public async getAllPatients() {
    try {
      return await axiosPrivate.get(PATIENTS_PAGE_ENDPOINT);
    } catch (error) {
      console.log(error);
    }
  }

  public async getPatient(id: string) {
    try {
      return await axiosPrivate.get(PATIENTS_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }

  public async savePatient(formPatient: PatientPayload) {
    try {
      console.log(formPatient);
      return await axiosPrivate.post(PATIENTS_PAGE_ENDPOINT, formPatient);
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

  public async updatePatient(id: string, formPatient: PatientPayload) {
    try {
      let person = {
        person: formPatient,
      };

      return await axiosPrivate.put(PATIENTS_PAGE_ENDPOINT + "/" + id, person);
    } catch (error) {
      console.log(error);
    }
  }
}
