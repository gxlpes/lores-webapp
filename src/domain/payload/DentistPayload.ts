import { PersonPayload } from "./PersonPayload";

export interface DentistPayload {
  croNumber: string;
  person: PersonPayload;
}
