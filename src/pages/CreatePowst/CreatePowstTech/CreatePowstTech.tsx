// import react
import { useEffect } from 'react';

// import rrd
import { useLocation } from 'react-router-dom';

// import hook
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import CreatePowstTechForm from '../../../components/forms/createPowst/CreatePowstTechForm/CreatePowstTechForm';

export default function CreatePowstTech() {
  const { pathname } = useLocation();

  const { setActiveStep } = useCreatePowst();

  useEffect(() => {
    if (pathname.includes('tech')) {
      setActiveStep(2);
    }
  }, [pathname, setActiveStep]);

  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Tech Stack</h2>

      <CreatePowstTechForm />
    </main>
  );
}
