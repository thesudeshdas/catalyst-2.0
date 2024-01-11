// import rrd
import { Outlet } from 'react-router-dom';

// import components
import AppNav from '../../components/navs/AppNav/AppNav';

export default function AppLayout() {
  return (
    <div className='flex flex-col min-h-full max-w-[1400px] mx-auto'>
      <AppNav />

      <div className='flex-grow p-3 lg:px-5'>
        <Outlet />
      </div>
    </div>
  );
}
