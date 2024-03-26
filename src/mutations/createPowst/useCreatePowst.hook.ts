import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';
import * as apiKeys from '../../constants/apisKeys.constants';
import {
  ICreatePowst,
  ICreatePowstBody
} from '../../types/createPowstTypes/createPowst.types';
import { IPowst } from '../../types/powstTypes/powst.types';
import { getErrorMessage } from '../../utils/getErrorMessage/getErrorMessage.utils';
import objectToFormData from '../../utils/jsonToFormData/jsonToFormData';

const createPowst = (req: ICreatePowstBody): Promise<ICreatePowst> =>
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
    mutationKey: ['createPowst'],
    mutationFn: createPowst,
    onSuccess: (data) => {
      queryClient.setQueryData(
        [apiKeys.powst.GET_ALL_POWSTS],
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
