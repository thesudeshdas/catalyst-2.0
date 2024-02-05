export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
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

export interface IRefreshTokenBody {
  refreshToken: string;
}

export interface IRefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
