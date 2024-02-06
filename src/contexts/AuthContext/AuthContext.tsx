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

const initialState: IAuthContextState = {
  refreshToken: refreshToken || '',
  accessToken: accessToken || ''
};

export const AuthContext = createContext<IAuthContext>({
  state: initialState,
  dispatch: () => {}
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
