// import rrd
import { useNavigate } from 'react-router-dom';

// import icons
import { FiChevronsRight } from 'react-icons/fi';

// import react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import hooks
import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { createPowstBasicSchema } from './createPowstBasicForm.schema';

// import types
import {
  ICreatePowstBasicForm,
  IPowst
} from '../../../../types/createPowstTypes/createPowst.types';

export default function CreatePowstBasicForm() {
  const { localPowst, setLocalPowst, setActiveStep } = useCreatePowst();

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ICreatePowstBasicForm>({
    resolver: zodResolver(createPowstBasicSchema),
    defaultValues: {
      live: localPowst?.live,
      name: localPowst?.name,
      source: localPowst?.source
    }
  });

  const onCreatePowstNameSubmit: SubmitHandler<ICreatePowstBasicForm> = (
    data
  ) => {
    console.log({ data });

    setLocalPowst(
      (prevLocalPowst): Partial<IPowst> => ({ ...prevLocalPowst, ...data })
    );

    setActiveStep(1);

    navigate('/create/description');
  };

  console.log({ localPowst });

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstNameSubmit)}
    >
      <TextInput
        control={control}
        name='name'
        label='Name of the project'
        placeholder='The Amazing Project'
        tip='We recommend providing the name of the app you have built'
        required
      />

      <TextInput
        control={control}
        name='live'
        label='Live Preview'
        placeholder='www.theamazingproject.com'
      />

      <TextInput
        control={control}
        name='source'
        label='Source Code'
        placeholder='www.theamazingproject.com'
      />

      <button className='btn btn-primary self-end'>
        Save and Next <FiChevronsRight className='h-6 w-6' />
      </button>
    </form>
  );
}
