import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CreatePowstDescriptionForm from '../../../components/forms/createPowst/CreatePowstDescriptionForm/CreatePowstDescriptionForm';
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

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
