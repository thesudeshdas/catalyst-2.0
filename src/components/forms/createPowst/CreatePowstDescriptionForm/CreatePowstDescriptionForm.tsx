import { SubmitHandler, useForm } from 'react-hook-form';
import { LuChevronsRight } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import { ICreatePowstDescriptionForm } from '../../../../types/createPowstTypes/createPowst.types';
import MarkdownInput from '../../../inputs/MarkdownInput/MarkdownInput';
import CreatePowstPreviousButton from '../CreatePowstPreviousButton/CreatePowstPreviousButton';

import { createPowstDescriptionSchema } from './createPowstDescription.schema';

import '@mdxeditor/editor/style.css';

export default function CreatePowstDescriptionForm() {
  const navigate = useNavigate();

  const { localPowst, savePowstInLocal, setActiveStep } = useCreatePowst();

  const { control, handleSubmit } = useForm<ICreatePowstDescriptionForm>({
    resolver: zodResolver(createPowstDescriptionSchema),
    defaultValues: {
      description: localPowst?.description
    }
  });

  const onCreatePowstDescriptionSubmit: SubmitHandler<
    ICreatePowstDescriptionForm
  > = (data) => {
    savePowstInLocal({
      description: data.description
    });

    setActiveStep(2);
    navigate('/create/tech');
  };

  return (
    <form
      noValidate
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstDescriptionSubmit)}
    >
      <MarkdownInput
        control={control}
        name='description'
        label='Description'
      />

      <div className='flex justify-between w-full'>
        <CreatePowstPreviousButton link='/create/basic' />

        <button
          type='submit'
          className='btn btn-primary'
        >
          Save and Next <LuChevronsRight className='h-6 w-6' />
        </button>
      </div>
    </form>
  );
}
