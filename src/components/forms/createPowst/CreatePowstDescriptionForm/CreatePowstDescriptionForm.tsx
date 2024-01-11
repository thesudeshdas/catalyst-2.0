// import rrd
import { useNavigate } from 'react-router-dom';

// import react hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { createPowstDescriptionSchema } from './createPowstDescriptionForm.schema';

// import types
import { ICreatePowstDescriptionForm } from '../../../../types/createPowstTypes/createPowst.types';

export default function CreatePowstDescriptionForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ICreatePowstDescriptionForm>({
    resolver: zodResolver(createPowstDescriptionSchema)
  });

  const onCreatePowstNameSubmit: SubmitHandler<ICreatePowstDescriptionForm> = (
    data
  ) => {
    console.log({ data });
    navigate('/create/tech');
  };

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstNameSubmit)}
    >
      <TextInput
        control={control}
        name='description'
        label='Project Description'
        placeholder='The Amazing Project'
        tip='We recommend providing the name of the app you have built'
        required
      />

      <button className='btn btn-primary'>Save and Next</button>
    </form>
  );
}
