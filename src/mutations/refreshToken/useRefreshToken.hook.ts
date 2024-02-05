// import react-query
import { useQuery } from 'react-query';

// import client
import axiosClient from '../../config/axiosInstance';

// import types
import {
  IRefreshTokenBody,
  IRefreshTokenResponse
} from '../../types/authTypes/auth.types';

const refreshTokenAPI = (
  req: IRefreshTokenBody
): Promise<IRefreshTokenResponse> =>
  axiosClient.post(`/auth/refresh`, req).then((res) => res.data);

export default function useRefreshToken({
  refreshToken
}: {
  refreshToken: string;
}) {
  return useQuery({
    queryKey: ['refreshToken', refreshToken],
    queryFn: () => refreshTokenAPI({ refreshToken }),
    onSuccess: (data) => {
      console.log({ data });

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    }
  });
}
