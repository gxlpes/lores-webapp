import { Dispatch, SetStateAction } from "react";
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
}
