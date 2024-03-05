import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CreatePowstImageForm from '../../../components/forms/createPowst/CreatePowstImageForm/CreatePowstImageForm';
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

export default function CreatePowstImage() {
  const { pathname } = useLocation();

  const { setActiveStep } = useCreatePowst();

  useEffect(() => {
    if (pathname.includes('image')) {
      setActiveStep(3);
    }
  }, [pathname, setActiveStep]);

  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Upload Image</h2>

      <CreatePowstImageForm />
    </main>
  );
}
