import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuPlus } from 'react-icons/lu';
import { zodResolver } from '@hookform/resolvers/zod';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import GlobalSuspenseFallback from '../../../../globals/GlobalSuspenseFallback/GlobalSuspenseFallback';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';
import useGetUserDetails from '../../../../queries/getUserDetails/useGetUserDetails';
import { IEditProfileBasicForm } from '../../../../types/profileTypes/profile.types';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';
import ImageInput from '../../../inputs/ImageInput/ImageInput';
import TextInput from '../../../inputs/TextInput/TextInput';

import UsernameInput from './UsernameInput/UsernameInput';
import { editProfileBasicSchema } from './editProfileBasicForm.schema';

export default function EditProfileBasicForm({ nameId }: { nameId: string }) {
  const { authState } = useAuthContext();

  const { data: userDetails, isPending: isUserDetailsPending } =
    useGetUserDetails({ userId: authState.userId });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending,
    isSuccess: isUpdateUserDetailsSuccess
  } = useUpdateUserDetails();

  const { control, clearErrors, reset, setError, handleSubmit } =
    useForm<IEditProfileBasicForm>({
      resolver: zodResolver(editProfileBasicSchema),
      defaultValues: {
        firstName: userDetails?.firstName,
        lastName: userDetails?.lastName,
        email: userDetails?.email,
        headline: userDetails?.headline,
        location: userDetails?.location
        // username: userDetails?.username
      }
    });

  const onEditProfileBasicSubmit: SubmitHandler<IEditProfileBasicForm> = async (
    data
  ) => {
    const sanitisedBasicDetails = sanitiseObject(data);

    updateUserDetailsMutation({
      ...sanitisedBasicDetails,
      userId: authState.userId
    });
  };

  useEffect(() => {
    reset({
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      email: userDetails?.email,
      // username: userDetails?.username,
      headline: userDetails?.headline,
      location: userDetails?.location
    });
  }, [userDetails, reset]);

  useEffect(() => {
    if (isUpdateUserDetailsSuccess) {
      handleCloseModal(nameId);
    }
  }, [nameId, isUpdateUserDetailsSuccess]);

  if (isUserDetailsPending) {
    return <GlobalSuspenseFallback />;
  }

  return (
    <form
      className='flex flex-col gap-3 items-center mx-auto'
      onSubmit={handleSubmit(onEditProfileBasicSubmit)}
    >
      <h3 className='font-bold text-lg'>Basic Details</h3>

      <ImageInput
        name='profilePic'
        control={control}
        clearErrors={clearErrors}
        defaultPicture={
          userDetails?.profilePic ? userDetails?.profilePic : undefined
        }
        setError={setError}
        previewClasses='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center relative mask-squircle'
        adderComponent={
          <div className='aspect-[1/1] w-full max-w-[200px] bg-base-300 rounded-md flex flex-col items-center justify-center gap-2 relative mask-squircle'>
            <LuPlus className='w-16 h-16' />

            <label
              htmlFor='upload'
              className='absolute cursor-pointer w-full h-full opacity-0'
            ></label>
          </div>
        }
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

      <UsernameInput
        control={control}
        name='username'
        placeholder={userDetails?.username}
      />

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
          disabled={isUpdateUserDetailsPending}
        >
          Cancel
        </button>

        <button
          type='submit'
          className='btn btn-primary'
          disabled={isUpdateUserDetailsPending}
        >
          {isUpdateUserDetailsPending && (
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

// TODO @thesudeshdas => Cancel should also reset the form

// TODO @thesudeshdas => Create a skeleton loading for the forms
