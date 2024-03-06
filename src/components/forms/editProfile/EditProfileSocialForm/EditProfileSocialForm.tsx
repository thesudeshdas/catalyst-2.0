import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import socialIconsList from '../../../../assets/icons/socialIcons';
import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';
import useGetUserDetails from '../../../../queries/getUserDetails/useGetUserDetails';
import { IEditProfileSocialForm } from '../../../../types/profileTypes/profile.types';
import { IUserSocials } from '../../../../types/userTypes/user.types';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';
import TextInput from '../../../inputs/TextInput/TextInput';

import { editProfileSocialSchema } from './editProfileSocialForm.schema';

export default function EditProfileSocialForm({ nameId }: { nameId: string }) {
  const { authState } = useAuthContext();

  const { data: userDetails } = useGetUserDetails({
    userId: authState.username
  });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending,
    isSuccess: isUpdateUserDetailsSuccess
  } = useUpdateUserDetails();

  const { control, handleSubmit } = useForm<IEditProfileSocialForm>({
    resolver: zodResolver(editProfileSocialSchema),
    defaultValues: userDetails?.socials?.reduce(
      (acc: Record<string, string>, { name, link }) => {
        acc[name] = link;
        return acc;
      },
      {}
    )
  });

  const onEditProfileSocialSubmit: SubmitHandler<
    IEditProfileSocialForm
  > = async (data) => {
    const sanitisedSocials: IUserSocials = sanitiseObject(data);

    const sanitisedSocialsArray = Object.entries(sanitisedSocials).map(
      ([key, value]) => ({
        name: key,
        link: value
      })
    );

    updateUserDetailsMutation({
      socials: sanitisedSocialsArray,
      userId: authState.userId
    });
  };

  useEffect(() => {
    if (isUpdateUserDetailsSuccess) {
      handleCloseModal(nameId);
    }
  }, [isUpdateUserDetailsSuccess, nameId]);

  return (
    <form
      className='flex flex-col gap-6 items-center w-full mx-auto'
      onSubmit={handleSubmit(onEditProfileSocialSubmit)}
    >
      <h3 className='font-bold text-lg'>Social Links</h3>

      <ul className='w-full grid grid-cols-1 md:grid-cols-2  gap-3'>
        {socialIconsList?.map((social) => (
          <li
            key={social.name}
            className='w-full'
          >
            <TextInput
              control={control}
              name={social.name}
              placeholder={social.example}
              leftIcon={<social.icon className='h-4.5 w-4.5' />}
            />
          </li>
        ))}
      </ul>

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

// TODO @thesudeshdas => The cancel and save button should be a different component
