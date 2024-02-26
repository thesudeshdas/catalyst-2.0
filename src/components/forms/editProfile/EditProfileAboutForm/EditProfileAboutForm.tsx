import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';
import useGetUserDetails from '../../../../queries/getUserDetails/useGetUserDetails';
import { IEditProfileAboutForm } from '../../../../types/profileTypes/profile.types';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';
import TextArea from '../../../inputs/TextArea/TextArea';

import { editProfileBasicSchema } from './editProfileAboutForm.schema';

export default function EditProfileAboutForm({ nameId }: { nameId: string }) {
  const { authState } = useAuthContext();

  const { data: userDetails } = useGetUserDetails({ userId: authState.userId });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending,
    isSuccess: isUpdateUserDetailsSuccess
  } = useUpdateUserDetails();

  const { control, handleSubmit, reset } = useForm<IEditProfileAboutForm>({
    resolver: zodResolver(editProfileBasicSchema),
    defaultValues: {
      bio: userDetails?.bio
    }
  });

  const onEditProfileAboutSubmit: SubmitHandler<IEditProfileAboutForm> = async (
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
      bio: userDetails?.bio
    });
  }, [userDetails, reset]);

  useEffect(() => {
    if (isUpdateUserDetailsSuccess) {
      handleCloseModal(nameId);
    }
  }, [nameId, isUpdateUserDetailsSuccess]);

  return (
    <form
      className='flex flex-col gap-3 items-center mx-auto'
      onSubmit={handleSubmit(onEditProfileAboutSubmit)}
    >
      <h3 className='font-bold text-lg'>About</h3>

      <TextArea
        control={control}
        name='bio'
        label='Short bio'
        placeholder='This will be one of the fist things that everyone will read about you. Keep it crisp and clear'
        maxLength={250} // TODO @thesudeshdas => Change this to 250 later
        tip='Short bio acts like a seller copy for you'
        noResize
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
