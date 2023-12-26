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
import { IRegisterBody } from '../../../../types/authTypes/auth.types';

interface RegisteredUser {
  name: string;
  email: string;
  _id: string;
  accessToken: string;
  refreshToken: string;
}

const registerApi = async (body: IRegisterBody): Promise<RegisteredUser> => {
  try {
    const { data } = await axios.post(
      'http://localhost:8000/auth/register',
      body
    );

    const sanitisedData: RegisteredUser = {
      _id: data._id,
      email: data.email,
      name: data.name,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken
    };

    return sanitisedData;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    throw new Error(getErrorMessage(axiosError.response?.data));
  }
};

export function useRegister() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { mutate: registerMutation } = useMutation<
    RegisteredUser,
    Error,
    IRegisterBody
  >((body) => registerApi(body), {
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

  return registerMutation;
}
