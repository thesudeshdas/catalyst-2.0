import { Dispatch } from 'react';

export interface IAuthContextState {
  accessToken?: string;
  refreshToken?: string;
  name: string;
  email: string;
  userId: string;
}

export interface IAuthReducerActions {
  type: 'LOGIN' | 'REGISTER' | 'REFRESH_TOKEN' | 'LOGOUT';
  payload: Partial<IAuthContextState>;
}

export interface IAuthContext {
  authState: IAuthContextState;
  authDispatch: Dispatch<IAuthReducerActions>;
}

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
  name: string;
  email: string;
  userId: string;
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

export interface IGetUserDetailsBody {
  userId: string;
}

export interface IGetUserDetailsResponse {
  name: string;
  email: string;
  userId: string;
}
