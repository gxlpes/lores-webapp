import { axiosPrivate } from "../api/axios";
import { TREATMENT_PAGE_ENDPOINT } from "../common/constants";
import { TreatmentPayload } from "../domain/payload/TreatmentPayload";

export default class TreatmentService {
  public async getAllTreatments() {
    try {
      return await axiosPrivate.get(TREATMENT_PAGE_ENDPOINT);
    } catch (error) {
      console.log(error);
    }
  }

  public async getTreatment(id: string) {
    try {
      return await axiosPrivate.get(TREATMENT_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }

  public async saveTreatment(formSpecialty: TreatmentPayload) {
    try {
      return await axiosPrivate.post(TREATMENT_PAGE_ENDPOINT, formSpecialty);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteTreatment(id: string) {
    try {
      return await axiosPrivate.delete(TREATMENT_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }

  public async updateTreatment(id: string, formTreatment: TreatmentPayload) {
    try {
      return await axiosPrivate.put(TREATMENT_PAGE_ENDPOINT + "/" + id, formTreatment);
    } catch (error) {
      console.log(error);
    }
  }
}
