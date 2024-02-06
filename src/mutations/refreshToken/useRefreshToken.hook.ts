// import react-query
import { useQuery } from 'react-query';

// import rrd
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['refreshToken', refreshToken],
    queryFn: () => refreshTokenAPI({ refreshToken }),
    onSuccess: (data) => {
      console.log({ data });

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
    onError: () => {
      navigate('/login');
    }
  });
}
