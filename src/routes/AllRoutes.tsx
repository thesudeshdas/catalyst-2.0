// import react
import { Suspense, lazy } from 'react';

// import rrd
import { Route, Routes } from 'react-router-dom';

// import fallbacks
import GlobalSuspenseFallback from '../globals/GlobalSuspenseFallback/GlobalSuspenseFallback';

// import layouts
import AppLayout from '../layouts/AppLayout/AppLayout';

// import powst creation pages
import AllProtectedRoutes from './AllProtectedRoutes';

// import auth pages
const Login = lazy(() => import('../pages/Auth/Login/Login'));
const Register = lazy(() => import('../pages/Auth/Register/Register'));

// import app pages
const Feed = lazy(() => import('../pages/Feed/Feed'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const EditProfile = lazy(() => import('../pages/EditProfile/EditProfile'));

export function AllRoutes() {
  return (
    <Routes>
      <Route
        path='/login'
        element={
          <Suspense fallback={<GlobalSuspenseFallback />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='/register'
        element={
          <Suspense fallback={<GlobalSuspenseFallback />}>
            <Register />
          </Suspense>
        }
      />

      <Route element={<AppLayout />}>
        <Route
          path='/feed'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <Feed />
            </Suspense>
          }
        />

        <Route
          path='/:username'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <Profile />
            </Suspense>
          }
        />

        <Route
          path='/edit-profile'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <EditProfile />
            </Suspense>
          }
        />
      </Route>

      <Route
        path='/*'
        element={<AllProtectedRoutes />}
      />
    </Routes>
  );
}
