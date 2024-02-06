// import react
import { useContext } from 'react';

// import context
import { AuthContext } from './AuthContext';

export default function useAuthContext() {
  return useContext(AuthContext);
}
