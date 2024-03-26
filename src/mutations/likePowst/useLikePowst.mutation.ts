import { useMutation } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';
import * as apiKeys from '../../constants/apisKeys.constants';
import { ILikePowstBody, IPowst } from '../../types/powstTypes/powst.types';

const likePowst = async (req: ILikePowstBody): Promise<IPowst> => {
  return axiosClient
    .post(`/powst/${req.powstId}/like`, { userId: req.userId })
    .then((res) => res.data);
};

export default function useLikePowst() {
  return useMutation({
    mutationKey: [apiKeys.powst.LIKE_POWST],
    mutationFn: likePowst,
    onSuccess: (data) => {
      queryClient.setQueryData(
        [apiKeys.powst.GET_ALL_POWSTS],
        (prevData: IPowst[]) => {
          return prevData?.map((powst) =>
            powst._id === data._id
              ? {
                  ...powst,
                  noOfLikes: powst.noOfLikes + 1,
                  likedBy: data.likedBy
                }
              : powst
          );
        }
      );
    }
  });
}
