// import types
import {
  IAuthContextState,
  IAuthReducerActions
} from '../../types/authTypes/auth.types';

export const authReducer = (
  state: IAuthContextState,
  action: IAuthReducerActions
): IAuthContextState => {
  const { payload, type }: IAuthReducerActions = action;

  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        ...payload
      };

    case 'LOGOUT':
      return {
        accessToken: '',
        refreshToken: '',
        email: '',
        firstName: '',
        lastName: '',
        userId: ''
      };

    case 'REFRESH_TOKEN':
      return {
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken
      };

    default:
      return state;
  }
};
