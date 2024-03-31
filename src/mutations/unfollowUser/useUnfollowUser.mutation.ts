import { useMutation } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';
import * as apiKeys from '../../constants/apisKeys.constants';
import {
  IUnfollowUserBody,
  IUnfollowUserReturn,
  IUser
} from '../../types/userTypes/user.types';

const unfollowUser = async (
  req: IUnfollowUserBody
): Promise<IUnfollowUserReturn> => {
  return axiosClient
    .post(`/users/${req.userId}/unfollow`, {
      userToUnFollow: req.userToUnfollow
    })
    .then((res) => res.data);
};

export default function useUnfollowUser({ userId }: { userId: string }) {
  return useMutation({
    mutationKey: [apiKeys.userDetails.UNFOLLOW_USER],
    mutationFn: unfollowUser,
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
