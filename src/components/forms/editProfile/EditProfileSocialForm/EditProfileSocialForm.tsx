// import react
import { useEffect } from 'react';

// import icons
import {
  SiBehance,
  SiDevdotto,
  SiDribbble,
  SiGithub,
  SiGitlab,
  SiHashnode,
  SiInstagram,
  SiLinkedin,
  SiMedium,
  SiTwitter,
  SiYoutube
} from 'react-icons/si';

// import react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import hooks
import useGetUserDetails from '../../../../queries/getUserDetails/useGetUserDetails';
import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useUpdateUserDetails from '../../../../mutations/updateUserDetails/useUpdateUserDetails';

// import utils
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import sanitiseObject from '../../../../utils/sanitiseObject/sanitiseObject.utils';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { editProfileSocialSchema } from './editProfileSocialForm.schema';

// import types
import { IEditProfileSocialForm } from '../../../../types/profileTypes/profile.types';
import { IUserSocials } from '../../../../types/userTypes/user.types';

export default function EditProfileSocialForm({ nameId }: { nameId: string }) {
  const { authState } = useAuthContext();

  const { data: userDetails } = useGetUserDetails({ userId: authState.userId });

  const {
    mutate: updateUserDetailsMutation,
    isPending: isUpdateUserDetailsPending,
    isSuccess: isUpdateUserDetailsSuccess
  } = useUpdateUserDetails();

  const { control, reset, handleSubmit } = useForm<IEditProfileSocialForm>({
    resolver: zodResolver(editProfileSocialSchema),
    defaultValues: {
      github: userDetails?.socials?.github,
      gitlab: userDetails?.socials?.gitlab,
      twitter: userDetails?.socials?.twitter,
      linkedIn: userDetails?.socials?.linkedIn,
      medium: userDetails?.socials?.medium,
      hashnode: userDetails?.socials?.hashnode,
      devTo: userDetails?.socials?.devTo,
      instagram: userDetails?.socials?.instagram,
      dribbble: userDetails?.socials?.dribbble,
      behance: userDetails?.socials?.behance,
      youtube: userDetails?.socials?.youtube
    }
  });

  const onEditProfileSocialSubmit: SubmitHandler<
    IEditProfileSocialForm
  > = async (data) => {
    const sanitisedSocials: IUserSocials = sanitiseObject(data);

    updateUserDetailsMutation({
      socials: sanitisedSocials,
      userId: authState.userId
    });
  };

  useEffect(() => {
    reset({
      github: userDetails?.socials?.github,
      gitlab: userDetails?.socials?.gitlab,
      twitter: userDetails?.socials?.twitter,
      linkedIn: userDetails?.socials?.linkedIn,
      medium: userDetails?.socials?.medium,
      hashnode: userDetails?.socials?.hashnode,
      devTo: userDetails?.socials?.devTo,
      instagram: userDetails?.socials?.instagram,
      dribbble: userDetails?.socials?.dribbble,
      behance: userDetails?.socials?.behance,
      youtube: userDetails?.socials?.youtube
    });
  }, [userDetails]);

  useEffect(() => {
    if (isUpdateUserDetailsSuccess) {
      handleCloseModal(nameId);
    }
  }, [isUpdateUserDetailsSuccess]);

  console.log({ isUpdateUserDetailsSuccess });

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto overflow-auto'
      onSubmit={handleSubmit(onEditProfileSocialSubmit)}
    >
      <h3 className='font-bold text-lg'>Social Links</h3>

      <ul className='w-full flex flex-col gap-3'>
        <li>
          <TextInput
            control={control}
            name='github'
            placeholder='github.com/techbro'
            leftIcon={<SiGithub className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='gitlab'
            placeholder='gitlab.com/techbro'
            leftIcon={<SiGitlab className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='twitter'
            placeholder='twitter.com/techbro'
            leftIcon={<SiTwitter className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='linkedIn'
            placeholder='linkedin.com/techbro'
            leftIcon={<SiLinkedin className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='medium'
            placeholder='techbro.medium.com'
            leftIcon={<SiMedium className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='hashnode'
            placeholder='hashnode.com/@techbro'
            leftIcon={<SiHashnode className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='devTo'
            placeholder='dev.to/techbro'
            leftIcon={<SiDevdotto className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='instagram'
            placeholder='instagram.com/techbro'
            leftIcon={<SiInstagram className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='youtube'
            placeholder='youtube.com/techbro'
            leftIcon={<SiYoutube className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='dribbble'
            placeholder='dribbble.com/techbro'
            leftIcon={<SiDribbble className='h-5 w-5' />}
          />
        </li>

        <li>
          <TextInput
            control={control}
            name='behance'
            placeholder='behance.net/techbro'
            leftIcon={<SiBehance className='h-5 w-5' />}
          />
        </li>
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
