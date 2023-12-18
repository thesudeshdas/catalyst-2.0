import { Outlet } from 'react-router-dom';
import AppNav from '../../components/navs/AppNav/AppNav';

export default function AppLayout() {
  return (
    <div className='flex flex-col'>
      <AppNav />

      <Outlet />
    </div>
  );
}
