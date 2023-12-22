import { jwtDecode } from 'jwt-decode';

export const isAccessTokenExpired = (accessToken: string) => {
  if (!accessToken) {
    return true;
  }

  const decodedToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000; // Convert to seconds

  if (!decodedToken || !decodedToken?.exp) {
    return true;
  } else {
    return decodedToken?.exp < currentTime;
  }
};
