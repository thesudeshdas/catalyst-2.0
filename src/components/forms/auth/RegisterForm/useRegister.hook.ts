// import rrd
import { useNavigate } from 'react-router-dom';

// import react-query

// import snackbar
import { useSnackbar } from 'notistack';

// import axios
import axios from 'axios';

// import utils
import { getErrorMessage } from '../../../../utils/getErrorMessage/getErrorMessage.utils';

// import types
import { IRegisterBody } from '../../../../types/authTypes/auth.types';
import { useMutation } from '@tanstack/react-query';

interface RegisteredUser {
  name: string;
  email: string;
  _id: string;
  accessToken: string;
  refreshToken: string;
}

const registerApi = async (body: IRegisterBody): Promise<RegisteredUser> =>
  await axios.post('http://localhost:8000/auth/register', body);

export function useRegister() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['register'],
    mutationFn: registerApi,
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
}
