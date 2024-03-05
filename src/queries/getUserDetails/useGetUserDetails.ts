import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import * as apiKeys from '../../constants/apisKeys.constants';
import { IGetUserDetailsBody, IUser } from '../../types/userTypes/user.types';

const getUserDetails = (req: IGetUserDetailsBody): Promise<Partial<IUser>> =>
  axiosClient(`/users/${req.userId}`).then((res) => res.data);

export default function useGetUserDetails({ userId }: IGetUserDetailsBody) {
  return useQuery({
    queryKey: [apiKeys.userDetails.GET_USER_DETAILS, userId],
    queryFn: () => getUserDetails({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
