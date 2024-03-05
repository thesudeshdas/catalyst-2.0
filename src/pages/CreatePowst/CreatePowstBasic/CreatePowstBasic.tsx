import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CreatePowstBasicForm from '../../../components/forms/createPowst/CreatePowstBasicForm/CreatePowstBasicForm';
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

export default function CreatePowstBasic() {
  const { pathname } = useLocation();

  const { setActiveStep } = useCreatePowst();

  useEffect(() => {
    if (pathname.includes('create')) {
      setActiveStep(0);
    }
  }, [pathname, setActiveStep]);

  return (
    <main className='flex flex-col gap-4'>
      <h2 className='text-center font-bold text-xl'>Basic Details</h2>

      <CreatePowstBasicForm />
    </main>
  );
}
