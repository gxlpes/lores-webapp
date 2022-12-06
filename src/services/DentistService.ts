import { axiosPrivate } from "../api/axios";
import { DENTISTS_PAGE_ENDPOINT } from "../common/constants";
import { DentistPayload } from "../domain/payload/DentistPayload";
import { PersonPayload } from "../domain/payload/PersonPayload";
import { LoginPayload } from "../domain/payload/UserPayload";

export default class DentistService {
  public async getAllDentists() {
    try {
      return await axiosPrivate.get(DENTISTS_PAGE_ENDPOINT);
    } catch (error) {
      console.log(error);
    }
  }

  public async saveDentist(formDentist: DentistPayload) {
    try {
      return await axiosPrivate.post(DENTISTS_PAGE_ENDPOINT, formDentist);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteDentist(id: string) {
    try {
      return await axiosPrivate.delete(DENTISTS_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }
}
