// import rrd
import { Route, Routes } from 'react-router-dom';

// import pages
import Login from '../../pages/auth/Login/Login';
import Register from '../../pages/auth/Register/Register';

export default function AuthRoutes() {
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
    </Routes>
  );
}
