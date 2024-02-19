// import react-query
import { useQuery } from '@tanstack/react-query';

// import clients
import axiosClient from '../../config/axiosInstance';

// import types
import { IGetUserDetailsBody, IUser } from '../../types/userTypes/user.types';

// import keys
import * as apiKeys from '../../constants/apisKeys.constants';

const getUserDetails = (req: IGetUserDetailsBody): Promise<Partial<IUser>> =>
  axiosClient(`/users/profile/${req.userId}`).then((res) => res.data);

export default function useGetUserDetails({ userId }: IGetUserDetailsBody) {
  return useQuery({
    queryKey: [apiKeys.userDetails.GET_USER_DETAILS, userId],
    queryFn: () => getUserDetails({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
