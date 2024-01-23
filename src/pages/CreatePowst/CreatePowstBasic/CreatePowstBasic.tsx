// import react
import { useEffect } from 'react';

// import rrd
import { useLocation } from 'react-router-dom';

// import hook
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import CreatePowstBasicForm from '../../../components/forms/createPowst/CreatePowstBasicForm/CreatePowstBasicForm';

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
