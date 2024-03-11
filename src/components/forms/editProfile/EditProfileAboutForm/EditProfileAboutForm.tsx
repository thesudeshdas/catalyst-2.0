import { useEffect } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import GlobalSuspenseFallback from '../../../../globals/GlobalSuspenseFallback/GlobalSuspenseFallback';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';
import useGetUserDetails from '../../../../queries/getUserDetails/useGetUserDetails';
import { IEditProfileAboutForm } from '../../../../types/profileTypes/profile.types';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';
import MarkdownInput from '../../../inputs/MarkdownInput/MarkdownInput';
import PillsInput from '../../../inputs/PillsInput/PillsInput';
import TextArea from '../../../inputs/TextArea/TextArea';

import { editProfileBasicSchema } from './editProfileAboutForm.schema';

import '@mdxeditor/editor/style.css';

export default function EditProfileAboutForm({ nameId }: { nameId: string }) {
  const { authState } = useAuthContext();

  const { data: userDetails, isPending: isUserDetailsPending } =
    useGetUserDetails({ userId: authState.username });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending,
    isSuccess: isUpdateUserDetailsSuccess
  } = useUpdateUserDetails();

  const { control, handleSubmit, reset } = useForm<IEditProfileAboutForm>({
    resolver: zodResolver(editProfileBasicSchema),
    defaultValues: {
      bio: userDetails?.bio,
      description: userDetails?.description
    }
  });
  const { fields, append, remove } = useFieldArray<
    IEditProfileAboutForm,
    'specialisation',
    'id'
  >({
    control,
    name: 'specialisation'
  });

  const onEditProfileAboutSubmit: SubmitHandler<IEditProfileAboutForm> = async (
    data
  ) => {
    const sanitisedBody = sanitiseObject({
      bio: data?.bio,
      description: data?.description,
      specialisation: data?.specialisation?.reduce(
        (acc: string[], cur: { text: string }) => [...acc, cur.text],
        []
      )
    });

    updateUserDetailsMutation({
      ...sanitisedBody,
      userId: authState.userId
    });
  };

  useEffect(() => {
    reset({
      bio: userDetails?.bio,
      specialisation: userDetails?.specialisation?.reduce(
        (acc: { text: string }[], cur: string) => [...acc, { text: cur }],
        []
      ),
      description: userDetails?.description
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
      onSubmit={handleSubmit(onEditProfileAboutSubmit)}
    >
      <h3 className='font-bold text-lg'>About</h3>

      <TextArea
        control={control}
        name='bio'
        label='Short bio'
        placeholder='This will be one of the fist things that everyone will read about you. Keep it crisp and clear'
        maxLength={250}
        tip='Short bio acts like a seller copy for you'
        noResize
      />

      <MarkdownInput
        control={control}
        name='description'
        label='Description'
      />

      <PillsInput
        fields={fields}
        append={append}
        remove={remove}
        label='Specialisation'
        tip='You can add upto 10 items'
        max={10}
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
