// import rrd
import { Navigate, Outlet } from 'react-router-dom';

// import hooks
import useRefreshToken from '../../mutations/refreshToken/useRefreshToken.hook';

// import utils
import { isAccessTokenExpired } from '../../utils/isTokenExpired/isAccessTokenExpired.utils';
import { isRefreshTokenExpired } from '../../utils/isTokenExpired/isRefreshTokenExpired.utils';

export default function ProtectedRoutes() {
  const accessToken = localStorage?.getItem('accessToken');
  const refreshToken = localStorage?.getItem('refreshToken');

  // if there is no refresh token or if the refresh token is expired, then redirect to login
  if (!refreshToken || isRefreshTokenExpired(refreshToken)) {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  // else if there is no access token or if the access token is expired, we will call the API to refresh the access token, and then redirect to the endpoint the user wants to go to
  else if (!accessToken || isAccessTokenExpired(accessToken)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useRefreshToken({
      refreshToken
    });

    if (data) {
      return <Outlet />;
    }
  }

  // now, since, we already have both access token and the refresh token, we will let the user access the endpoint they want
  return <Outlet />;
}
