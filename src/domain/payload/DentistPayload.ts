import { PersonPayload } from "./PersonPayload";

export interface DentistPayload {
  id?: string;
  croNumber: string;
  person: PersonPayload;
}
