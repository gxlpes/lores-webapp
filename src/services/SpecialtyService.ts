import { axiosPrivate } from "../api/axios";
import { SPECIALTY_PAGE_ENDPOINT } from "../common/constants";
import { SpecialtyPayload } from "../domain/payload/SpecialtyPayload";

export default class SpecialtyService {
  public async getAllSpecialties() {
    try {
      return await axiosPrivate.get(SPECIALTY_PAGE_ENDPOINT);
    } catch (error) {
      console.log(error);
    }
  }

  public async saveSpecialty(formSpecialty: SpecialtyPayload) {
    try {
      return await axiosPrivate.post(SPECIALTY_PAGE_ENDPOINT, formSpecialty);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteSpecialty(id: string) {
    try {
      return await axiosPrivate.delete(SPECIALTY_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }
}
