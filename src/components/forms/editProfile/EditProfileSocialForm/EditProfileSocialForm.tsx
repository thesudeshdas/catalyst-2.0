// import react

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
import { useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';

// import schema
import { editProfileSocialSchema } from './editProfileSocialForm.schema';

// import types
import { IEditProfileSocialForm } from '../../../../types/profileTypes/profile.types';

export default function EditProfileSocialForm() {
  const { control } = useForm<IEditProfileSocialForm>({
    resolver: zodResolver(editProfileSocialSchema),
    defaultValues: {}
  });

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto overflow-auto'
      //   onSubmit={handleSubmit(onCreatePowstNameSubmit)}
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
        >
          Cancel
        </button>

        {/* <button className='btn btn-primary'>Save</button> */}
      </div>
    </form>
  );
}
