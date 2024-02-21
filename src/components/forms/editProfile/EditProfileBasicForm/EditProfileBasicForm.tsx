// import react
import { ChangeEvent, useEffect, useState } from 'react';

// import icons
import { FiPlus } from 'react-icons/fi';

// import react-hook-form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import hooks
import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useGetUserDetails from '../../../../queries/getUserDetails/useGetUserDetails';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';

// import utils
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';
import CustomImage from '../../../images/CustomImage/CustomImage';

// import schema
import { editProfileBasicSchema } from './editProfileBasicForm.schema';

// import constants
import { imageMimeType } from '../../../../constants/image.constants';

// import types
import { IEditProfileBasicForm } from '../../../../types/profileTypes/profile.types';

export default function EditProfileBasicForm({ nameId }: { nameId: string }) {
  const updateUserDetailsMutation = useUpdateUserDetails();

  const { authState } = useAuthContext();

  const { data } = useGetUserDetails({ userId: authState.userId });

  const { control, clearErrors, reset, handleSubmit } =
    useForm<IEditProfileBasicForm>({
      resolver: zodResolver(editProfileBasicSchema),
      defaultValues: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        headline: data?.headline,
        location: data?.location
      }
    });

  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>(
    String(data?.profilePic)
  );

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

  const onEditProfileBasicSubmit: SubmitHandler<IEditProfileBasicForm> = async (
    data
  ) => {
    const sanitisedBasicDetails = sanitiseObject(data);

    updateUserDetailsMutation.mutate({
      ...sanitisedBasicDetails,
      userId: authState.userId
    });
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

  useEffect(() => {
    reset({
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      headline: data?.headline,
      location: data?.location
    });
  }, [data]);

  useEffect(() => {
    if (updateUserDetailsMutation.isSuccess) {
      handleCloseModal(nameId);
    }
  }, [updateUserDetailsMutation.isSuccess]);

  console.log({ data });

  return (
    <form
      className='flex flex-col gap-3 items-center w-full md:max-w-[800px] mx-auto overflow-auto'
      onSubmit={handleSubmit(onEditProfileBasicSubmit)}
    >
      <h3 className='font-bold text-lg'>Basic Details</h3>

      {fileDataURL ? (
        <div className='aspect-[1/ 1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center relative  mask-squircle'>
          <CustomImage
            imgSources={{
              small: {
                alt: 'User uploaded',
                src: String(fileDataURL)
              }
            }}
            aspectRatio='aspect-[1/1]'
          />

          <label
            htmlFor='upload'
            className='absolute cursor-pointer w-full h-full opacity-0'
          ></label>
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

      <div className='flex flex-col gap-2 md:flex-row w-full'>
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
        />
      </div>

      <TextInput
        control={control}
        name='email'
        label='Email'
        placeholder='techbro@winning.com'
        tip='Email can not be changed. Please contact the OG tech bro'
        disabled
      />

      <TextInput
        control={control}
        name='location'
        label='Location'
        placeholder='Bangalore, India'
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
          onClick={() => handleCloseModal(nameId)}
          disabled={updateUserDetailsMutation.isPending}
        >
          Cancel
        </button>

        <button
          type='submit'
          className='btn btn-primary'
          disabled={updateUserDetailsMutation.isPending}
        >
          {updateUserDetailsMutation.isPending && (
            <span className='loading loading-spinner'></span>
          )}
          Save
        </button>
      </div>
    </form>
  );
}

// TODO @thesudeshdas => remove all the alerts from the app

// TODO @thesudeshdas => show the save button only when the user changes the input

// Question @thesudeshdas => how do I close the modal after the data is edited? I can send the entire function or just send the id,
