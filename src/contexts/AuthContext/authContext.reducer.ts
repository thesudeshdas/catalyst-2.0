// import types
import {
  IAuthContextState,
  IAuthReducerActions
} from '../../types/authTypes/auth.types';

export const authReducer = (
  state: IAuthContextState,
  action: IAuthReducerActions
): IAuthContextState => {
  const {
    payload,
    type
  }: { payload: Partial<IAuthContextState>; type: string } = action;

  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken
      };

    default:
      return state;
  }
};
