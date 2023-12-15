// import react
import React from 'react';
import ReactDOM from 'react-dom/client';

// import rrd
import { BrowserRouter } from 'react-router-dom';

// import routes
import AuthRoutes from './routes/authRoutes/authRoutes.tsx';

// import styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
