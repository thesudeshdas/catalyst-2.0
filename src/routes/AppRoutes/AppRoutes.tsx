// import rrd
import { Navigate, Route, Routes } from 'react-router-dom';

// import pages
import Feed from '../../pages/Feed/Feed';
import AppLayout from '../../layouts/AppLayout/AppLayout';

export default function AppRoutes() {
  const userToken = 'thisIsTemporary';

  if (!userToken) {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path='/feed'
          element={<Feed />}
        />
      </Route>
    </Routes>
  );
}
