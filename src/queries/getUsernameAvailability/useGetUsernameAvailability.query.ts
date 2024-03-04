import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import * as apiKeys from '../../constants/apisKeys.constants';

const getUsernameAvailability = (req: {
  username: string;
}): Promise<{ success: boolean; message: string }> =>
  axiosClient.get(`/users/username/${req.username}`).then((res) => res.data);

export default function useGetUsernameAvailability({
  username
}: {
  username: string;
}) {
  return useQuery({
    queryKey: [apiKeys.userDetails.GET_USERNAME_AVAILABILITY, username],
    queryFn: () => getUsernameAvailability({ username }),
    enabled: Boolean(username) && username !== ''
  });
}
