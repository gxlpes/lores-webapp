export interface Dentist {
  id: string;
  croNumber: string;
  person: Person;
}

export interface Person {
  fullName: string;
  birthdate: string;
  cpfNumber: string;
  telephoneNumber: string;
  emailAddress: string;
  address: Address;
}

export interface Address {
  mainAddress: string;
  numberAddress: string;
  neighborHood: string;
  complementInfo: string;
  zipCode: string;
}
