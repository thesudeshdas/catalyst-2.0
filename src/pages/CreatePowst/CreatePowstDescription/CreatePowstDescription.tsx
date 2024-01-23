// import react
import { useEffect } from 'react';

// import rrd
import { useLocation } from 'react-router-dom';

// import hook
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import CreatePowstDescriptionForm from '../../../components/forms/createPowst/CreatePowstDescriptionForm/CreatePowstDescriptionForm';

export default function CreatePowstDescription() {
  const { pathname } = useLocation();

  const { setActiveStep } = useCreatePowst();

  useEffect(() => {
    if (pathname.includes('description')) {
      setActiveStep(1);
    }
  }, [pathname, setActiveStep]);

  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Description</h2>

      <CreatePowstDescriptionForm />
    </main>
  );
}
