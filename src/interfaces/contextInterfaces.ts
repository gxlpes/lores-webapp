export interface IRegisterUser {
  handleRegisterUserForm: (key: string, value: string) => void;
  registerWithCredentials: () => void;
}

export interface ILoginUser {
  handleUserLoginForm: (key: string, value: string) => void;
  loginWithCredentials: () => void;
}
