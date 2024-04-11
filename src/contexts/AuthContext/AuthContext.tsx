import { createContext, ReactNode, useReducer } from 'react';

import {
  IAuthContext,
  IAuthContextState
} from '../../types/authTypes/auth.types';

import { authReducer } from './authContext.reducer';

const accessToken = localStorage?.getItem('accessToken');
const refreshToken = localStorage?.getItem('refreshToken');
const userId = localStorage?.getItem('userId');
const username = localStorage?.getItem('username');

const initialState: IAuthContextState = {
  refreshToken: refreshToken || '',
  accessToken: accessToken || '',
  email: '',
  firstName: '',
  lastName: '',
  username: username || '',
  userId: userId || '',
  showModal: false
};

export const AuthContext = createContext<IAuthContext>({
  authState: initialState,
  authDispatch: () => {}
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
