import { Dispatch, SetStateAction } from "react";
import { AppointmentPayload } from "../payload/AppointmentPayload";
import { DentistPayload } from "../payload/DentistPayload";
import { PatientPayload, PersonPayload } from "../payload/PersonPayload";
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
  allDentists: DentistPayload[] | string[];
  formDentist: DentistPayload;
  setFormDentist: Dispatch<SetStateAction<DentistPayload>>;
}

export interface ISpecialty extends IServiceMethods {
  allSpecialties: any;
  formSpecialty: SpecialtyPayload;
  setFormSpecialty: Dispatch<SetStateAction<SpecialtyPayload>>;
}

export interface ITreatment extends IServiceMethods {
  allTreatments: any;
  formTreatment: TreatmentPayload;
  setFormTreatment: Dispatch<SetStateAction<TreatmentPayload>>;
}

export interface IAppointment extends IServiceMethods {
  allAppointments: any;
  formAppointment: AppointmentPayload;
  setFormAppointment: Dispatch<SetStateAction<AppointmentPayload>>;
}
