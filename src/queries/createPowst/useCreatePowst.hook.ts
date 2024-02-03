// import react-query
import { useMutation } from 'react-query';

// import notistack
import { useSnackbar } from 'notistack';

// import axios client
import axiosClient from '../../config/axiosInstance';

// import utils
import { objectToFormData } from '../../utils/jsonToFormData/jsonToFormData';
import { getErrorMessage } from '../../utils/getErrorMessage/getErrorMessage.utils';

// import types
import { ICreatePowstBody } from '../../types/createPowstTypes/createPowst.types';

const createPowst = async (req: ICreatePowstBody) => {
  console.log({ req });

  return axiosClient.post('/powst', objectToFormData(req), {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'multipart/form-data'
    }
  });
};

export default function useCreatePowstServer() {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createPowst,
    onError: (error) => {
      enqueueSnackbar(getErrorMessage(error), {
        variant: 'error'
      });
    }
  });
}
