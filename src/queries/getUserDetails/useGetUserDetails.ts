// import react-query
import { useQuery } from '@tanstack/react-query';

// import clients
import axiosClient from '../../config/axiosInstance';

// import types
import {
  IGetUserDetailsBody,
  IGetUserDetailsResponse
} from '../../types/authTypes/auth.types';

const getUserDetails = (
  req: IGetUserDetailsBody
): Promise<IGetUserDetailsResponse> =>
  axiosClient(`/users/profile/${req.userId}`).then((res) => res.data);

export function useGetUserDetails({ userId }: IGetUserDetailsBody) {
  return useQuery({
    queryKey: ['userDetails', userId],
    queryFn: () => getUserDetails({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
