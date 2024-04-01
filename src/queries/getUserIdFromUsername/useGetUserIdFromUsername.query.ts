import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import * as apiKeys from '../../constants/apisKeys.constants';
import {
  IGetUserIdFromUsernameBody,
  IGetUserIdFromUsernameReturn
} from '../../types/userTypes/user.types';

const getUserIdFromUsername = async (
  req: IGetUserIdFromUsernameBody
): Promise<IGetUserIdFromUsernameReturn> => {
  return axiosClient
    .get(`/users/${req.username}/get-id`)
    .then((res) => res.data);
};

export default function useGetUserIdFromUsername({
  username
}: IGetUserIdFromUsernameBody) {
  return useQuery({
    queryKey: [apiKeys.userDetails.GET_USER_ID_FROM_USERNAME, username],
    queryFn: () => getUserIdFromUsername({ username }),
    enabled: Boolean(username) && username !== ''
  });
}
