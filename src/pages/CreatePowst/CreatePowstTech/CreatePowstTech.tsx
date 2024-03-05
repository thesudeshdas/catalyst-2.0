import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CreatePowstTechForm from '../../../components/forms/createPowst/CreatePowstTechForm/CreatePowstTechForm';
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

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
