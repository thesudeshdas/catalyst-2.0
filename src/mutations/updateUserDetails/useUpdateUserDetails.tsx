// import react-query
import { useMutation } from '@tanstack/react-query';

// import notistack
import { useSnackbar } from 'notistack';

// import clients
import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';

// import utils
import sanitiseObject from '../../utils/sanitiseObject/sanitiseObject.utils';
import objectToFormData from '../../utils/jsonToFormData/jsonToFormData';

// import types
import {
  IUpdateUserDetailsBody,
  IUser
} from '../../types/userTypes/user.types';

import * as apiKeys from '../../constants/apisKeys.constants';

const updateUserDetails = async (
  req: Partial<IUpdateUserDetailsBody>
): Promise<Partial<IUser>> => {
  return axiosClient
    .post(`/users/${req.userId}`, objectToFormData(sanitiseObject(req)), {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data'
      }
    })
    .then((res) => res.data);
};

export default function useUpdateUserDetails() {
  const { enqueueSnackbar } = useSnackbar();

  const updateUserDetailsMutation = useMutation({
    mutationKey: [apiKeys.userDetails.UPDATE_USER_DETAILS],
    mutationFn: updateUserDetails,
    onSuccess: (data) => {
      queryClient.setQueryData(
        [apiKeys.userDetails.GET_USER_DETAILS, data._id],
        data
      );

      enqueueSnackbar('User details updated', { variant: 'success' });
    }
  });

  return updateUserDetailsMutation;
}
