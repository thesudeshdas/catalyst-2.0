// import rrd
import { useNavigate } from 'react-router-dom';

// import react-query
import { useMutation } from '@tanstack/react-query';

// import snackbar
import { useSnackbar } from 'notistack';

// import axios
import axios from 'axios';

// import hooks
import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';

// import utils
import { getErrorMessage } from '../../../../utils/getErrorMessage/getErrorMessage.utils';

// import types
import {
  ILoginBody,
  ILoginResponse
} from '../../../../types/authTypes/auth.types';

const loginApi = (body: ILoginBody): Promise<ILoginResponse> =>
  axios.post('http://localhost:8000/auth/login', body).then((res) => res.data);

export function useLogin() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { dispatch } = useAuthContext();

  const { mutate: loginMutation } = useMutation<
    ILoginResponse,
    Error,
    ILoginBody
  >({
    mutationKey: ['login'],
    mutationFn: loginApi,
    onSuccess: (data) => {
      // storing the access token and refresh token in the local storage to persist the tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // we are saving the access token and the refresh token in the context since we will be using this globally
      dispatch({
        type: 'LOGIN',
        payload: {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          email: data.email,
          name: data.name,
          userId: data.userId
        }
      });

      navigate('/feed');
    },
    onError: (error) => {
      enqueueSnackbar(getErrorMessage(error), {
        variant: 'error'
      });
    }
  });

  return loginMutation;
}
