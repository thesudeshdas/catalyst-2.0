// import rrd
import { useNavigate } from 'react-router-dom';

// import react-query
import { useMutation } from 'react-query';

// import snackbar
import { useSnackbar } from 'notistack';

// import axios
import axios, { AxiosError } from 'axios';

// import utils
import { getErrorMessage } from '../../../../utils/getErrorMessage/getErrorMessage.utils';

// import types
import { ILoginBody } from '../../../../types/authTypes/auth.types';

export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}

const loginApi = async (body: ILoginBody) => {
  try {
    const { data } = await axios.post('http://localhost:8000/auth/login', body);

    return data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    throw new Error(getErrorMessage(axiosError.response?.data));
  }
};

export function useLogin() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation<
    ITokenResponse,
    Error,
    ILoginBody
  >((body) => loginApi(body), {
    onSuccess: (data) => {
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));

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
