export interface IPerson {
  fullName: string;
  birthdate: string;
  cpfNumber: string;
  telephoneNumber: string;
  emailAddress: string;
  address: IAddress;
}

export interface IAddress {
  mainAddress: string;
  numberAddress: string;
  neighborHood: string;
  complementInfo: string;
  zipCode: string;
}
