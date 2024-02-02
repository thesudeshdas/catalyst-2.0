// import rrd
import { Route, Routes } from 'react-router-dom';

// import protected routes
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

// import layouts
import AppLayout from '../layouts/AppLayout/AppLayout';
import CreatePowstLayout from '../layouts/CreatePowstLayout/CreatePowstLayout';

// import auth pages
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';

// import app pages
import Feed from '../pages/Feed/Feed';
import Profile from '../pages/Profile/Profile';

// import powst creation pages
import CreatePowstBasic from '../pages/CreatePowst/CreatePowstBasic/CreatePowstBasic';
import CreatePowstDescription from '../pages/CreatePowst/CreatePowstDescription/CreatePowstDescription';
import CreatePowstTech from '../pages/CreatePowst/CreatePowstTech/CreatePowstTech';
import CreatePowstImage from '../pages/CreatePowst/CreatePowstImage/CreatePowstImage';
import CreatePowstReview from '../pages/CreatePowst/CreatePowstReview/CreatePowstReview';

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

      <Route element={<AppLayout />}>
        <Route
          path='/feed'
          element={<Feed />}
        />

        <Route
          path='/profile'
          element={<Profile />}
        />
      </Route>

      <Route element={<ProtectedRoutes />}>
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
            path='/create/tech'
            element={<CreatePowstTech />}
          />

          <Route
            path='/create/image'
            element={<CreatePowstImage />}
          />

          <Route
            path='/create/review'
            element={<CreatePowstReview />}
          />

          <Route
            path='/create/*'
            element={<CreatePowstBasic />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
