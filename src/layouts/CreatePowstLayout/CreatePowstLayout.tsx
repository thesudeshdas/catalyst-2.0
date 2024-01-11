// import rrd
import { Outlet } from 'react-router-dom';

// import components
import CreateTopNav from '../../components/navs/CreateTopNav/CreateTopNav';

export default function CreatePowstLayout() {
  return (
    <div className='flex flex-col min-h-full max-w-[1400px] mx-auto'>
      <CreateTopNav />

      <ul className='steps max-w-[800px] mx-auto w-full my-12'>
        <li className='step step-primary text-xs'>Basic details</li>
        <li className='step text-xs'>Description</li>
        <li className='step text-xs'>Tech stack</li>
        <li className='step text-xs'>Image(s)</li>
      </ul>

      <div className='flex-grow p-3 lg:px-5'>
        <Outlet />
      </div>
    </div>
  );
}
