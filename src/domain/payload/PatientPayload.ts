import { PersonPayload } from "./PersonPayload";

export interface PatientPayload {
  id?: string;
  person: PersonPayload;
}
