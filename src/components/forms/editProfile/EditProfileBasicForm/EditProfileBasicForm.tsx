// import react
import { ChangeEvent, useEffect, useState } from 'react';

// import icons
import { FiPlus } from 'react-icons/fi';

// import react-hook-form
import { Controller, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';
import CustomImage from '../../../images/CustomImage/CustomImage';

// import schema
import { editProfileBasicSchema } from './editProfileBasicForm.schema';

// import types
import { IEditProfileBasicForm } from '../../../../types/profileTypes/profile.types';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function EditProfileBasicForm() {
  const { control, clearErrors } = useForm<IEditProfileBasicForm>({
    resolver: zodResolver(editProfileBasicSchema),
    defaultValues: {}
  });

  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>();

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void
  ) => {
    clearErrors('profilePic');

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

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto overflow-auto'
      //   onSubmit={handleSubmit(onCreatePowstNameSubmit)}
    >
      <h3 className='font-bold text-lg'>Basic Details</h3>

      {fileDataURL ? (
        <div className='aspect-[1/ 1] w-full max-w-[200px] bg-base-300 rounded-md overflow-hidden mask-squircle'>
          <CustomImage
            imgSources={{
              small: {
                alt: 'User uploaded',
                src: String(fileDataURL)
              }
            }}
            aspectRatio='aspect-[1/1]'
          />
        </div>
      ) : (
        <div className='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center gap-2 relative mask-squircle'>
          <FiPlus className='w-16 h-16' />

          <label
            htmlFor='upload'
            className='absolute cursor-pointer w-full h-full opacity-0'
          ></label>
        </div>
      )}

      <Controller
        control={control}
        name={'profilePic'}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <input
              {...field}
              value={value?.fileName}
              onChange={(event) => handleImageUpload(event, onChange)}
              type='file'
              id='upload'
              className='file-input input-sm cursor-pointer hidden'
              accept='image/png, image/jpeg, image/jpg'
            />
          );
        }}
      />

      <div className='flex flex-col gap-2 md:flex-row'>
        <TextInput
          control={control}
          name='firstName'
          label='First Name'
          placeholder='Tech'
          required
        />

        <TextInput
          control={control}
          name='lastName'
          label='Last Name'
          placeholder='Bro'
          required
        />
      </div>

      <TextInput
        control={control}
        name='email'
        label='Email'
        placeholder='techbro@winning.com'
        required
      />

      <TextInput
        control={control}
        name='headline'
        label='Headline'
        placeholder='Super Senior Dev @TheWinningCompany'
      />

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
        >
          Cancel
        </button>

        {/* <button className='btn btn-primary'>Save</button> */}
      </div>
    </form>
  );
}