// import axios
import { AxiosError } from 'axios';

// import react-query
import { useQuery } from 'react-query';

// import notistack
import { useSnackbar } from 'notistack';

// import axios client
import axiosClient from '../config/axiosInstance';

// import utils
import { getErrorMessage } from '../utils/getErrorMessage/getErrorMessage.utils';

// import types
import { IPowst } from '../types/createPowstTypes/createPowst.types';

const getAllPowsts = async () => {
  try {
    const { data } = await axiosClient.get('/powst');

    return data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    throw new Error(getErrorMessage(axiosError.response?.data));
  }
};

export function useGetAllPowsts() {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery<IPowst[], Error>({
    queryKey: ['allPowsts'],
    queryFn: getAllPowsts,
    onError: (error) => {
      enqueueSnackbar(getErrorMessage(error), {
        variant: 'error'
      });
    }
  });
}
