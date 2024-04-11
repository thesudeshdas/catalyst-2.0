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
        userId: '',
        username: '',
        showModal: false
      };

    case 'SHOW_MODAL': {
      return { ...state, showModal: true };
    }

    case 'HIDE_MODAL': {
      return { ...state, showModal: false };
    }

    case 'REFRESH_TOKEN':
      return {
        ...state,
        accessToken: payload?.accessToken,
        refreshToken: payload?.refreshToken
      };

    default:
      return state;
  }
};
