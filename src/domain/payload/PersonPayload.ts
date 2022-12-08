export interface PatientPayload {
  id?: string;
  person: PersonPayload;
}

export interface PersonPayload {
  fullName: string;
  birthdate: string;
  cpfNumber: string;
  telephoneNumber: string;
  emailAddress: string;
  address: AddressPayload;
}

export interface AddressPayload {
  mainAddress: string;
  numberAddress: string;
  neighborHood: string;
  complementInfo: string;
  zipCode: string;
}
