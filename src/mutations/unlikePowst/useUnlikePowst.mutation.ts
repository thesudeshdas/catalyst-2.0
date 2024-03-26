import { useMutation } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';
import * as apiKeys from '../../constants/apisKeys.constants';
import { ILikePowstBody, IPowst } from '../../types/powstTypes/powst.types';

const unlikePowst = async (req: ILikePowstBody): Promise<IPowst> => {
  return axiosClient
    .post(`/powst/${req.powstId}/unlike`, { userId: req.userId })
    .then((res) => res.data);
};

export default function useUnlikePowst() {
  return useMutation({
    mutationKey: [apiKeys.powst.UNLIKE_POWST],
    mutationFn: unlikePowst,
    onSuccess: (data) => {
      queryClient.setQueryData(
        [apiKeys.powst.GET_ALL_POWSTS],
        (prevData: IPowst[]) => {
          return prevData?.map((powst) =>
            powst._id === data._id
              ? {
                  ...powst,
                  noOfLikes: powst.noOfLikes - 1,
                  likedBy: data.likedBy
                }
              : powst
          );
        }
      );
    }
  });
}
