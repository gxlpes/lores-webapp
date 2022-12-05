import { Dispatch, SetStateAction } from "react";
import { DentistPayload } from "../payload/DentistPayload";
import { PersonPayload } from "../payload/PersonPayload";
import { LoginPayload, RegisterPayload } from "../payload/UserPayload";

export interface IRegisterUser {
  registerWithCredentials: (e: React.FormEvent<HTMLFormElement>) => void;
  setUserForm: Dispatch<SetStateAction<RegisterPayload>>;
  userForm: RegisterPayload;
}

export interface ILoginUser {
  loginWithCredentials: (e: React.FormEvent<HTMLFormElement>) => void;
  setUserForm: Dispatch<SetStateAction<LoginPayload>>;
  userForm: LoginPayload;

  auth: any;
  setAuth: any;
}

export interface IPatient {
  getAllPatients: () => void;
  allPatients: any;
  formPatient: PersonPayload;
  setFormPatient: Dispatch<SetStateAction<PersonPayload>>;
  savePatient: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IDentist {
  getAllDentists: () => void;
  allDentists: DentistPayload[];
}
