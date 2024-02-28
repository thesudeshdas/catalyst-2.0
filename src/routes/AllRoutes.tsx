import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalSuspenseFallback from '../globals/GlobalSuspenseFallback/GlobalSuspenseFallback';
import AppLayout from '../layouts/AppLayout/AppLayout';

import AllProtectedRoutes from './AllProtectedRoutes';

const Login = lazy(() => import('../pages/Auth/Login/Login'));
const Register = lazy(() => import('../pages/Auth/Register/Register'));
const Feed = lazy(() => import('../pages/Feed/Feed'));
const Profile = lazy(() => import('../pages/Profile/Profile'));

export function AllRoutes() {
  return (
    <Routes>
      {AllProtectedRoutes()}

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
      </Route>
    </Routes>
  );
}
