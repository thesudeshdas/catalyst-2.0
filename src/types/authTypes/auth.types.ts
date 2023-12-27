export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  acceptTerms: string;
}

export interface IRegisterBody {
  name: string;
  email: string;
  password: string;
}
