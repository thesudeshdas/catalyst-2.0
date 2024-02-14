// import react
import { ReactNode, createContext, useReducer } from 'react';

// import reducer
import { authReducer } from './authContext.reducer';

// import types
import {
  IAuthContext,
  IAuthContextState
} from '../../types/authTypes/auth.types';

const accessToken = localStorage?.getItem('accessToken');
const refreshToken = localStorage?.getItem('refreshToken');
const userId = localStorage?.getItem('userId');

const initialState: IAuthContextState = {
  refreshToken: refreshToken || '',
  accessToken: accessToken || '',
  email: '',
  name: '',
  userId: userId || ''
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
