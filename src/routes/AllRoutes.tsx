// import rrd
import { Route, Routes } from 'react-router-dom';

// import components
// import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

// import layouts
import AppLayout from '../layouts/AppLayout/AppLayout';
import CreatePowstLayout from '../layouts/CreatePowstLayout/CreatePowstLayout';

// import auth pages
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';

// import app pages
import Feed from '../pages/Feed/Feed';

// import powst creation pages
import CreatePowstBasic from '../pages/CreatePowst/CreatePowstBasic/CreatePowstBasic';
import CreatePowstDescription from '../pages/CreatePowst/CreatePowstDescription/CreatePowstDescription';

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

      {/* <Route element={<ProtectedRoutes />}> */}
      <Route element={<AppLayout />}>
        <Route
          path='/feed'
          element={<Feed />}
        />
      </Route>

      <Route element={<CreatePowstLayout />}>
        <Route
          path='/create/basic'
          element={<CreatePowstBasic />}
        />

        <Route
          path='/create/description'
          element={<CreatePowstDescription />}
        />

        <Route
          path='/create/*'
          element={<CreatePowstBasic />}
        />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}
