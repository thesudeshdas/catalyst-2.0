// import rrd
import { useNavigate } from 'react-router-dom';

// import react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { createPowstBasicSchema } from './createPowstBasicForm.schema';

// import types
import { ICreatePowstBasicForm } from '../../../../types/createPowstTypes/createPowst.types';

export default function CreatePowstBasicForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ICreatePowstBasicForm>({
    resolver: zodResolver(createPowstBasicSchema)
  });

  const onCreatePowstNameSubmit: SubmitHandler<ICreatePowstBasicForm> = (
    data
  ) => {
    console.log({ data });
    navigate('/create/description');
  };

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

      <button className='btn btn-primary'>Save and Next</button>
    </form>
  );
}
