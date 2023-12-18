// import react
import React from 'react';
import ReactDOM from 'react-dom/client';

// import rrd
import { BrowserRouter } from 'react-router-dom';

// import routes

// import styles
import './index.css';
import AppRoutes from './routes/AppRoutes/AppRoutes.tsx';
import AuthRoutes from './routes/AuthRoutes/AuthRoutes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthRoutes />

      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
