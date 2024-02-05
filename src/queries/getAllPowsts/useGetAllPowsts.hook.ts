// import axios

// import react-query
import { useQuery } from 'react-query';

// import notistack
import { useSnackbar } from 'notistack';

// import axios client
import axiosClient from '../../config/axiosInstance';

// import utils
import { getErrorMessage } from '../../utils/getErrorMessage/getErrorMessage.utils';

// import types
import { IPowst } from '../../types/createPowstTypes/createPowst.types';

const getAllPowsts = (): Promise<IPowst[]> =>
  axiosClient.get('/powst').then((res) => res.data);

export function useGetAllPowsts() {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery<IPowst[], Error>({
    queryKey: ['allPowsts'],
    queryFn: getAllPowsts,
    onError: (error) => {
      enqueueSnackbar(getErrorMessage(error), {
        variant: 'error'
      });
    },
    initialData: []
  });
}
