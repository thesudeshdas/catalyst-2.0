// import react
import React from 'react';
import ReactDOM from 'react-dom/client';

// import rrd
import { BrowserRouter } from 'react-router-dom';

// import react-error-boundary
import { ErrorBoundary } from 'react-error-boundary';

// import react-query
import { QueryClientProvider } from '@tanstack/react-query';

// import snackbar
import { SnackbarProvider, closeSnackbar } from 'notistack';

// import icons
import { FiX } from 'react-icons/fi';

// import routes
import { AllRoutes } from './routes/AllRoutes.tsx';

// import styles
import './index.css';

// import contexts
import AuthProvider from './contexts/AuthContext/AuthContext.tsx';
import BlockerProvider from './contexts/BlockerContext/BlockerContext';

// import query client
import queryClient from './config/queryClient.ts';

// import components
import GlobalErrorFallback from './globals/GlobalErrorFallback/GlobalErrorFallback.tsx';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          maxSnack={3}
          action={(snackbarId) => (
            <button
              className='btn btn-ghost btn-square'
              onClick={() => closeSnackbar(snackbarId)}
            >
              <FiX />
            </button>
          )}
          autoHideDuration={3000}
          preventDuplicate
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
        >
          <AuthProvider>
            <BlockerProvider>
              <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
                {/* {AllRoutes()} */}

                <AllRoutes />
              </ErrorBoundary>
            </BlockerProvider>
          </AuthProvider>
        </SnackbarProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
