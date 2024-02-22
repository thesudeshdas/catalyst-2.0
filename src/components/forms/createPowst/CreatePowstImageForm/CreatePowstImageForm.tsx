import { SubmitHandler, useForm } from 'react-hook-form';
import { FiChevronsRight, FiInfo, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import { ICreatePowstImageForm } from '../../../../types/createPowstTypes/createPowst.types';
import ImageInput from '../../../inputs/ImageInput/ImageInput';
import TextInput from '../../../inputs/TextInput/TextInput';
import CreatePowstPreviousButton from '../CreatePowstPreviousButton/CreatePowstPreviousButton';

import { createPowstImageSchema } from './createPowstImageForm.schema';

export default function CreatePowstImageForm() {
  const navigate = useNavigate();

  const { localPowst, savePowstInLocal, setActiveStep } = useCreatePowst();

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError
  } = useForm<ICreatePowstImageForm>({
    resolver: zodResolver(createPowstImageSchema),
    defaultValues: {
      image: localPowst?.image
    }
  });

  const onCreatePowstImageSubmit: SubmitHandler<ICreatePowstImageForm> = (
    data
  ) => {
    savePowstInLocal({ image: data?.image });

    setActiveStep(4);
    navigate('/create/review');
  };

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstImageSubmit)}
    >
      <ImageInput
        name='image'
        control={control}
        clearErrors={clearErrors}
        setError={setError}
        aspectRatio='aspect-[4/3]'
        previewClasses='aspect-[4/3] w-full max-w-[400px] bg-base-300 rounded-md flex flex-col items-center justify-center relative overflow-hidden'
        adderComponent={
          <div className='aspect-[4/3] w-full max-w-[400px] bg-base-300 rounded-md flex flex-col items-center justify-center gap-2 relative'>
            <FiPlus className='w-16 h-16' />

            <p className='text-sm'>Upload an image</p>

            <label
              htmlFor='upload'
              className='absolute cursor-pointer w-full h-full opacity-0'
            ></label>
          </div>
        }
      />

      {errors?.image && (
        <div className='label'>
          <span className='label-text-alt text-error font-medium'>
            {String(errors?.image?.message)}
          </span>
        </div>
      )}

      <TextInput
        control={control}
        name='alt'
        label='Image alt attribute'
        placeholder='A screenshot of charts'
        tip='We recommend providing the alt for the image you upload'
      />

      {/* <button
        className='btn btn-primary'
        type='submit'
      >
        Save and Next
      </button> */}

      <div className='flex justify-between w-full'>
        <CreatePowstPreviousButton link='/create/tech' />

        <div className='flex items-center gap-2'>
          <button
            className='btn btn-primary'
            // disabled={!file}
          >
            Save and Next <FiChevronsRight className='h-6 w-6' />
          </button>

          {/* {!file && ( */}
          <div
            className='tooltip tooltip-right cursor-pointer'
            data-tip='You need to upload an image'
          >
            <FiInfo className='h-5 w-5' />
          </div>
          {/* )} */}
        </div>
      </div>
    </form>
  );
}
