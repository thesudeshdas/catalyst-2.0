import { jwtDecode } from 'jwt-decode';

export const isRefreshTokenExpired = (refreshToken: string) => {
  if (!refreshToken) {
    return true;
  }

  const decodedToken = jwtDecode(refreshToken);
  const currentTime = Date.now() / 1000; // Convert to seconds

  if (!decodedToken || !decodedToken?.exp) {
    return true;
  } else {
    return decodedToken?.exp < currentTime;
  }
};
