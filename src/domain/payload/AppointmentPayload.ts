import { Person } from "../interfaces/entities/PersonInterface";

export interface AppointmentPayload {
  patient: Patient;
  dentist: Dentist;
  treatment: Treatment;
  reason: string;
  dateAppointment: string;
}

export interface Patient {
  person: Person;
  id: string;
}

export interface Dentist {
  person: Person;
  id: string;
}

export interface Treatment {
  procedureName?: string;
  fieldOfSpecialty?: string;
  id: string;
}
