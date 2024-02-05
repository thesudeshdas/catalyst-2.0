// import react
import React from 'react';
import ReactDOM from 'react-dom/client';

// import rrd
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from 'react-query';

// import snackbar
import { SnackbarProvider, closeSnackbar } from 'notistack';

// import icons
import { FiX } from 'react-icons/fi';

// import routes
import { AllRoutes } from './routes/AllRoutes.tsx';

// import styles
import './index.css';

// import contexts
import BlockerProvider from './contexts/BlockerContext/BlockerContext';

// import query client
import { queryClient } from './config/queryClient.ts';

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
          <BlockerProvider>{AllRoutes()}</BlockerProvider>
        </SnackbarProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
