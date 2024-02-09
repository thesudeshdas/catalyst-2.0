// import react
import { Suspense, lazy } from 'react';

// import rrd
import { Route, Routes } from 'react-router-dom';

// import fallbacks
import GlobalSuspenseFallback from '../globals/GlobalSuspenseFallback/GlobalSuspenseFallback';

// import layouts
import AppLayout from '../layouts/AppLayout/AppLayout';
import CreatePowstLayout from '../layouts/CreatePowstLayout/CreatePowstLayout';

// import protected routes
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

// import app pages
// const Profile = lazy(() => import('../pages/Profile/Profile'));

// import powst creation pages
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
    <Routes>
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
    </Routes>
  );
}
