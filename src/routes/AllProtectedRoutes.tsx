import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import GlobalSuspenseFallback from '../globals/GlobalSuspenseFallback/GlobalSuspenseFallback';
import AppLayout from '../layouts/AppLayout/AppLayout';
import CreatePowstLayout from '../layouts/CreatePowstLayout/CreatePowstLayout';

import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

const EditProfile = lazy(() => import('../pages/EditProfile/EditProfile'));

const CreatePowstBasic = lazy(
  () => import('../pages/CreatePowst/CreatePowstBasic/CreatePowstBasic')
);
const CreatePowstDescription = lazy(
  () =>
    import('../pages/CreatePowst/CreatePowstDescription/CreatePowstDescription')
);
const CreatePowstTech = lazy(
  () => import('../pages/CreatePowst/CreatePowstTech/CreatePowstTech')
);
const CreatePowstImage = lazy(
  () => import('../pages/CreatePowst/CreatePowstImage/CreatePowstImage')
);
const CreatePowstReview = lazy(
  () => import('../pages/CreatePowst/CreatePowstReview/CreatePowstReview')
);

export default function AllProtectedRoutes() {
  return (
    <Route element={<ProtectedRoutes />}>
      <Route element={<AppLayout />}>
        {/* <Route
            path='/profile'
            element={
              <Suspense fallback={<GlobalSuspenseFallback />}>
                <Profile />
              </Suspense>
            }
          /> */}

        <Route
          path='/edit-profile'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <EditProfile />
            </Suspense>
          }
        />
      </Route>

      <Route element={<CreatePowstLayout />}>
        <Route
          path='/create/basic'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <CreatePowstBasic />
            </Suspense>
          }
        />

        <Route
          path='/create/description'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <CreatePowstDescription />
            </Suspense>
          }
        />

        <Route
          path='/create/tech'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <CreatePowstTech />
            </Suspense>
          }
        />

        <Route
          path='/create/image'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <CreatePowstImage />
            </Suspense>
          }
        />

        <Route
          path='/create/review'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <CreatePowstReview />
            </Suspense>
          }
        />

        <Route
          path='/create/*'
          element={
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <CreatePowstBasic />
            </Suspense>
          }
        />
      </Route>
    </Route>
  );
}
