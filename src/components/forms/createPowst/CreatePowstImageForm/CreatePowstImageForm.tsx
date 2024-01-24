// import react
import { ChangeEvent, useEffect, useState } from 'react';

// import rrd
import { useNavigate } from 'react-router-dom';

// import icons
import { FiChevronsRight, FiInfo, FiPlus } from 'react-icons/fi';

// import react hook form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import hooks
import useCreatePowst from '../../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import CustomImage from '../../../images/CustomImage/CustomImage';
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { createPowstImageSchema } from './createPowstImageForm.schema';

// import types
import { ICreatePowstImageForm } from '../../../../types/createPowstTypes/createPowst.types';
import CreatePowstPreviousButton from '../CreatePowstPreviousButton/CreatePowstPreviousButton';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function CreatePowstImageForm() {
  const navigate = useNavigate();

  const { localPowst, savePowstInLocal, setActiveStep } = useCreatePowst();

  const {
    control,
    handleSubmit,
    formState: { errors },
    formState,
    clearErrors
  } = useForm<ICreatePowstImageForm>({
    resolver: zodResolver(createPowstImageSchema),
    defaultValues: {
      image: localPowst?.image
    }
  });

  const [file, setFile] = useState<File>(localPowst?.image);
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>();

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void
  ) => {
    clearErrors('image');

    const file = event?.target?.files?.[0];

    console.log({ file });

    if (!file?.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    } else {
      setFile(file);
      onChange(event.target?.files?.[0]);
    }
  };

  const onCreatePowstImageSubmit: SubmitHandler<ICreatePowstImageForm> = (
    data
  ) => {
    // const formData = new FormData();
    // formData.append('files', data?.image?.[0]);

    console.log({ data });

    savePowstInLocal({ image: data?.image });

    setActiveStep(4);
    navigate('/create/review');
  };

  // For handling the preview of the uploaded image
  useEffect(() => {
    let fileReader: FileReader;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);

      console.log({ fileReader });
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  console.log('from image', { localPowst, formState });

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreatePowstImageSubmit)}
    >
      {fileDataURL ? (
        <div className='aspect-[4/3] w-full max-w-[400px] bg-base-300 rounded-md overflow-hidden'>
          <CustomImage
            imgSources={{
              small: {
                alt: 'User uploaded',
                src: String(fileDataURL)
              }
            }}
            aspectRatio='aspect-[4/3]'
          />
        </div>
      ) : (
        <div className='aspect-[4/3] w-full max-w-[400px] bg-base-300 rounded-md flex flex-col items-center justify-center gap-2 relative'>
          <FiPlus className='w-16 h-16' />

          <p className='text-sm'>Upload an image</p>

          <label
            htmlFor='upload'
            className='absolute cursor-pointer w-full h-full opacity-0'
          ></label>
        </div>
      )}

      <Controller
        control={control}
        name={'image'}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <input
              {...field}
              value={value?.fileName}
              onChange={(event) => handleImageUpload(event, onChange)}
              type='file'
              id='upload'
              className='file-input input-sm cursor-pointer'
              accept='image/png, image/jpeg, image/jpg'
            />
          );
        }}
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
            disabled={!file}
          >
            Save and Next <FiChevronsRight className='h-6 w-6' />
          </button>

          {!file && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip='You need to upload an image'
            >
              <FiInfo className='h-5 w-5' />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
