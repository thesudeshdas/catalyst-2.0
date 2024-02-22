import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppNav from '../../components/navs/AppNav/AppNav';
import PowstDetailsModal from '../../components/Powst/PowstDetailsModal/PowstDetailsModal';

export default function AppLayout() {
  const [powstToBeShown, setPowstToBeShown] = useState<string>('');

  return (
    <div className='flex flex-col min-h-full max-w-[1400px] mx-auto'>
      <AppNav />

      <div className='flex flex-col items-center flex-grow p-3 lg:px-6 py-11 lg:py-14'>
        <Outlet context={{ powstToBeShown, setPowstToBeShown }} />
      </div>

      <PowstDetailsModal
        powstToBeShown={powstToBeShown}
        setPowstToBeShown={setPowstToBeShown}
      />
    </div>
  );
}
