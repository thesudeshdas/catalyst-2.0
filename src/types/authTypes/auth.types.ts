import { Dispatch } from 'react';

export interface IAuthContextState {
  accessToken?: string;
  refreshToken?: string;
  firstName: string;
  lastName?: string;
  email: string;
  userId: string;
  username: string;
  showModal: boolean;
}

export interface IAuthReducerActions {
  type:
    | 'LOGIN'
    | 'REGISTER'
    | 'REFRESH_TOKEN'
    | 'LOGOUT'
    | 'SHOW_MODAL'
    | 'HIDE_MODAL';
  payload?: Partial<IAuthContextState>;
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
  firstName: string;
  lastName?: string;
  email: string;
  userId: string;
  username: string;
}

export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: string;
}

export interface IRegisterBody {
  firstName: string;
  lastName?: string;
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
