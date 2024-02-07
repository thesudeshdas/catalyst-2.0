// import react-query
import { useQuery } from '@tanstack/react-query';

// import rrd

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
    queryFn: () => refreshTokenAPI({ refreshToken })
  });
}
