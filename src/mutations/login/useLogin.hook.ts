import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import axiosClient from '../../config/axiosInstance';
import useAuthContext from '../../contexts/AuthContext/authContext.hook';
import { ILoginBody, ILoginResponse } from '../../types/authTypes/auth.types';
import { getErrorMessage } from '../../utils/getErrorMessage/getErrorMessage.utils';

const loginApi = (body: ILoginBody): Promise<ILoginResponse> =>
  axiosClient.post('auth/login', body).then((res) => res.data);

export function useLogin() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { authDispatch } = useAuthContext();

  const { mutate: loginMutation, isPending: isLoginPending } = useMutation<
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
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('username', data.username);

      // we are saving the access token and the refresh token in the context since we will be using this globally
      authDispatch({
        type: 'LOGIN',
        payload: {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          userId: data.userId,
          username: data?.username
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

  return { loginMutation, isLoginPending };
}
