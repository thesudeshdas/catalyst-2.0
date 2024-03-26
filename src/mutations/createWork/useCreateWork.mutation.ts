import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import * as apiKeys from '../../constants/apisKeys.constants';
import { ICreateWorkBody, IWork } from '../../types/workTypes/work.types';
import objectToFormData from '../../utils/jsonToFormData/jsonToFormData';

const createWork = (req: ICreateWorkBody): Promise<IWork> =>
  axiosClient
    .post(`/work`, objectToFormData(req), {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data'
      }
    })
    .then((res) => res.data);

export default function useCreateWork() {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [apiKeys.work.CREATE_WORK],
    mutationFn: createWork,
    onSuccess: () => {
      navigate('/edit-profile?form=work');
    }
  });
}
