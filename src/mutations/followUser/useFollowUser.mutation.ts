import { useMutation } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';
import * as apiKeys from '../../constants/apisKeys.constants';
import {
  IFollowUserBody,
  IFollowUserReturn,
  IUser
} from '../../types/userTypes/user.types';

const followUser = async (req: IFollowUserBody): Promise<IFollowUserReturn> => {
  return axiosClient
    .post(`/users/${req.userId}/follow`, {
      userToFollow: req.userToFollow
    })
    .then((res) => res.data);
};

export default function useFollowUser({ userId }: { userId: string }) {
  return useMutation({
    mutationKey: [apiKeys.userDetails.FOLLOW_USER],
    mutationFn: followUser,
    onSuccess: (data) => {
      queryClient.setQueryData(
        [apiKeys.userDetails.GET_USER_DETAILS, userId],
        (prevData: IUser): IUser => {
          return {
            ...prevData,
            noOfFollowings: data.noOfFollowings,
            followings: data.followings
          };
        }
      );
    }
  });
}
