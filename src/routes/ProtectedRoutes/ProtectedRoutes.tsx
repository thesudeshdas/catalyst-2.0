// import rrd
import { Navigate, Outlet } from 'react-router-dom';

// import utils
import { isAccessTokenExpired } from '../../utils/isTokenExpired/isAccessTokenExpired.utils';
import { isRefreshTokenExpired } from '../../utils/isTokenExpired/isRefreshTokenExpired.utils';

export default function ProtectedRoutes() {
  const accessToken = localStorage?.getItem('accessToken');
  const refreshToken = localStorage?.getItem('refreshToken');

  if (
    !accessToken ||
    !refreshToken ||
    isAccessTokenExpired(JSON.parse(accessToken)) ||
    isRefreshTokenExpired(JSON.parse(refreshToken))
  ) {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  return <Outlet />;
}
