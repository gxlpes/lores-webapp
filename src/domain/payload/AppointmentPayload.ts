export interface AppointmentPayload extends Patient, Dentist, Treatment {
  patient: Patient;
  dentist: Dentist;
  treatment: Treatment;
  reason: string;
  dateAppointment: string;
}

export interface Patient {
  id: string;
}

export interface Dentist {
  id: string;
}

export interface Treatment {
  id: string;
}
