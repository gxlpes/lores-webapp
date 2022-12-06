import { axiosPrivate } from "../api/axios";
import { APPOINTMENTS_PAGE_ENDPOINT } from "../common/constants";
import { AppointmentPayload } from "../domain/payload/AppointmentPayload";
import { TreatmentPayload } from "../domain/payload/TreatmentPayload";

export default class AppointmentService {
  public async getAllAppointments() {
    try {
      return await axiosPrivate.get(APPOINTMENTS_PAGE_ENDPOINT);
    } catch (error) {
      console.log(error);
    }
  }

  public async saveAppointment(formAppointment: AppointmentPayload) {
    try {
      return await axiosPrivate.post(APPOINTMENTS_PAGE_ENDPOINT, formAppointment);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteAppointment(id: string) {
    try {
      return await axiosPrivate.delete(APPOINTMENTS_PAGE_ENDPOINT + "/" + id);
    } catch (error) {
      console.log(error);
    }
  }
}
