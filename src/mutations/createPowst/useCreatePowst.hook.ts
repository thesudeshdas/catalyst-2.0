// import rrd
import { useNavigate } from 'react-router-dom';

// import react-query
import { useMutation } from 'react-query';

// import notistack
import { useSnackbar } from 'notistack';

// import clients
import axiosClient from '../../config/axiosInstance';
import { queryClient } from '../../config/queryClient';

// import utils
import { objectToFormData } from '../../utils/jsonToFormData/jsonToFormData';
import { getErrorMessage } from '../../utils/getErrorMessage/getErrorMessage.utils';

// import types
import {
  ICreatePowstBody,
  IPowst
} from '../../types/createPowstTypes/createPowst.types';

const createPowst = (req: ICreatePowstBody): Promise<IPowst> =>
  axiosClient
    .post('/powst', objectToFormData(req), {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data'
      }
    })
    .then((res) => res.data);

export default function useCreatePowstServer() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createPowst,
    onSuccess: (data: IPowst) => {
      queryClient.setQueryData(
        ['allPowsts'],
        (prevData: IPowst[] | undefined) => {
          return prevData ? [...prevData, data] : [data];
        }
      );
      navigate('/feed');
    },
    onError: (error) => {
      enqueueSnackbar(getErrorMessage(error), {
        variant: 'error'
      });
    }
  });
}
