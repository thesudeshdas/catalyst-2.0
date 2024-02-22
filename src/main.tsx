import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { FiX } from 'react-icons/fi';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { closeSnackbar, SnackbarProvider } from 'notistack';

import queryClient from './config/queryClient.ts';
import AuthProvider from './contexts/AuthContext/AuthContext.tsx';
import BlockerProvider from './contexts/BlockerContext/BlockerContext';
import GlobalErrorFallback from './globals/GlobalErrorFallback/GlobalErrorFallback.tsx';
import { AllRoutes } from './routes/AllRoutes.tsx';

import './index.css';

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
