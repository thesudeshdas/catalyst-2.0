// import react
import { useState } from 'react';

// import rrd
import { Outlet } from 'react-router-dom';

// import components
import CreateTopNav from '../../components/navs/CreateTopNav/CreateTopNav';

export default function CreatePowstLayout() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className='flex flex-col min-h-full max-w-[1400px] mx-auto'>
      <CreateTopNav />

      <ul className='steps max-w-[800px] mx-auto w-full py-6 lg:my-8 xl:my-12 sticky top-14 bg-base-100'>
        <li className={`step ${activeStep >= 0 ? 'step-primary' : ''} text-xs`}>
          Basic details
        </li>
        <li className={`step ${activeStep >= 1 ? 'step-primary' : ''} text-xs`}>
          Description
        </li>
        <li className={`step ${activeStep >= 2 ? 'step-primary' : ''} text-xs`}>
          Tech stack
        </li>
        <li className={`step ${activeStep >= 3 ? 'step-primary' : ''} text-xs`}>
          Image
        </li>
      </ul>

      <div className='flex-grow p-3 lg:px-5'>
        <Outlet context={{ setActiveStep }} />
      </div>
    </div>
  );
}
