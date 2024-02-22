import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiChevronsRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import useBlocker from '../../../../contexts/BlockerContext/blockerContext.hook';
import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import { ICreatePowstBasicForm } from '../../../../types/createPowstTypes/createPowst.types';
import TextInput from '../../../inputs/TextInput/TextInput';

import { createPowstBasicSchema } from './createPowstBasicForm.schema';

export default function CreatePowstBasicForm() {
  const navigate = useNavigate();

  const { localPowst, savePowstInLocal, setActiveStep } = useCreatePowst();
  const { setBlocked } = useBlocker();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm<ICreatePowstBasicForm>({
    resolver: zodResolver(createPowstBasicSchema),
    defaultValues: {
      live: localPowst?.live,
      title: localPowst?.title,
      source: localPowst?.source
    }
  });

  const onCreatePowstNameSubmit: SubmitHandler<ICreatePowstBasicForm> = (
    data
  ) => {
    savePowstInLocal(data);

    setActiveStep(1);

    navigate('/create/description');
  };

  useEffect(() => {
    if (isDirty) {
      setBlocked(true);
    }
  }, [isDirty, localPowst, setBlocked]);

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstNameSubmit)}
    >
      <TextInput
        control={control}
        name='title'
        label='Name of the project'
        placeholder='The Amazing Project'
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

      <button
        className='btn btn-primary self-end'
        disabled={!isValid}
      >
        Save and Next <FiChevronsRight className='h-6 w-6' />
      </button>
    </form>
  );
}
