// import rrd
import { Route, Routes } from 'react-router-dom';

// import components
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

// import layouts
import AppLayout from '../layouts/AppLayout/AppLayout';

// import auth pages
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';

// import app pages
import Feed from '../pages/Feed/Feed';

export function AllRoutes() {
  return (
    <Routes>
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />

      <Route element={<ProtectedRoutes />}>
        <Route element={<AppLayout />}>
          <Route
            path='/feed'
            element={<Feed />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
