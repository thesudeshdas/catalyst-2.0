import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { LuChevronsRight } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import { ICreatePowstDescriptionForm } from '../../../../types/createPowstTypes/createPowst.types';
import MarkdownInput from '../../../inputs/MarkdownInput/MarkdownInput';
import PillsInput from '../../../inputs/PillsInput/PillsInput';
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

  const {
    fields: keywordsFields,
    append: appendKeywords,
    remove: removeKeywords
  } = useFieldArray<ICreatePowstDescriptionForm, 'keywords', 'id'>({
    control,
    name: 'keywords'
  });

  const onCreatePowstDescriptionSubmit: SubmitHandler<
    ICreatePowstDescriptionForm
  > = (data) => {
    savePowstInLocal({
      description: data.description,
      keywords: data.keywords
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

      <PillsInput
        fields={keywordsFields}
        append={appendKeywords}
        remove={removeKeywords}
        label='Keywords'
        tip='You can add upto 10 keywords. Keywords help you rank the creation higher than your peer'
        max={10}
        htmlId='create_powst_keywords'
        placeholder='ReactJS, CSS'
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
