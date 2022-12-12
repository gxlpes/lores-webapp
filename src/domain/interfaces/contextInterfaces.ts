import { Dispatch, SetStateAction } from "react";
import { AppointmentPayload } from "../payload/AppointmentPayload";
import { DentistPayload } from "../payload/DentistPayload";
import { PatientPayload } from "../payload/PatientPayload";
import { SpecialtyPayload } from "../payload/SpecialtyPayload";
import { TreatmentPayload } from "../payload/TreatmentPayload";
import { LoginPayload, RegisterPayload } from "../payload/UserPayload";
import { IServiceMethods } from "./serviceInterfaces";

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

export interface IPatient extends IServiceMethods {
  allPatients: any;
  formPatient: PatientPayload;
  setFormPatient: Dispatch<SetStateAction<PatientPayload>>;
  createNewPatient: () => void;
}

export interface IDentist extends IServiceMethods {
  allDentists: any;
  formDentist: DentistPayload;
  setFormDentist: Dispatch<SetStateAction<DentistPayload>>;
  createNewDentist: () => void;
}

export interface ISpecialty extends IServiceMethods {
  allSpecialties: any;
  formSpecialty: SpecialtyPayload;
  setFormSpecialty: Dispatch<SetStateAction<SpecialtyPayload>>;
  createNewSpecialty: () => void;

  assignSpecialtyToDentist: any;
  setFormDentistSpecialty: any;
  formDentistSpecialty: any;
}

export interface ITreatment extends IServiceMethods {
  allTreatments: any;
  formTreatment: TreatmentPayload;
  setFormTreatment: Dispatch<SetStateAction<TreatmentPayload>>;
  createNewTreatment: () => void;
  assignSpecialtyToTreatment: (e: React.FormEvent<HTMLFormElement>) => void;
  setFormSpecialtyTreatment: any;
  formSpecialtyTreatment: any;
}

export interface IAppointment extends IServiceMethods {
  allAppointments: any;
  formAppointment: AppointmentPayload;
  setFormAppointment: Dispatch<SetStateAction<AppointmentPayload>>;
  createNewAppointment: () => void;
  setDentistCro: Dispatch<SetStateAction<string>>;
  setPatientCpf: Dispatch<SetStateAction<string>>;
}
