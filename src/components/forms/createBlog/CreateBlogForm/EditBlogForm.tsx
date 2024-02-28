import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useAuthContext from '../../../../contexts/AuthContext/authContext.hook';
import useCreateBlog from '../../../../mutations/createBlogs/useCreateBlog.mutation';
import { IEditBlogForm } from '../../../../types/profileTypes/profile.types';
import handleCloseModal from '../../../../utils/closeModal/closeModal.utils';
import SelectInput from '../../../inputs/SelectInput/SelectInput';
import TextInput from '../../../inputs/TextInput/TextInput';

import { editBlogSchema } from './editBlogForm.schema';

export default function EditBlogForm() {
  const { control, handleSubmit, reset } = useForm<IEditBlogForm>({
    resolver: zodResolver(editBlogSchema)
  });

  const { authState } = useAuthContext();

  const {
    mutate: mutateCreateBlog,
    isPending: isCreateBlogPending,
    isSuccess: isCreateBlogSuccess
  } = useCreateBlog();

  const onCreateBlogSubmit: SubmitHandler<IEditBlogForm> = async (data) => {
    mutateCreateBlog({
      title: data.title,
      link: data.link,
      platform: data.platform,
      owner: authState.userId
    });
  };

  useEffect(() => {
    if (isCreateBlogSuccess) {
      reset({
        link: '',
        title: '',
        platform: 'medium'
      });

      handleCloseModal('edit_blog_modal');
    }
  }, [isCreateBlogSuccess, reset]);

  return (
    <form
      className='flex flex-col gap-6 items-center w-full md:max-w-[800px] mx-auto'
      onSubmit={handleSubmit(onCreateBlogSubmit)}
    >
      <h3 className='font-bold text-lg'>Add Blog</h3>

      <TextInput
        control={control}
        name='title'
        label='Title'
        placeholder='The blog title here'
      />

      <TextInput
        control={control}
        name='link'
        label='Link'
        placeholder='thesudeshdas.medium.com/what-i-built'
      />

      <SelectInput
        control={control}
        name='platform'
        label='Platform'
        options={[
          { label: 'Medium', value: 'medium' },
          { label: 'Hashnode', value: 'hashnode' },
          { label: 'DevTo', value: 'devTo' },
          { label: 'Personal', value: 'personal' }
        ]}
        defaultValue='medium'
        placeholder='thesudeshdas.medium.com/what-i-built'
      />

      <div className='flex gap-2'>
        <button
          className='btn btn-outline'
          type='button'
          onClick={() => handleCloseModal('edit_blog_modal')}
          disabled={isCreateBlogPending}
        >
          Cancel
        </button>

        <button
          className='btn btn-primary'
          disabled={isCreateBlogPending}
        >
          {isCreateBlogPending && (
            <span className='loading loading-spinner'></span>
          )}
          Save
        </button>
      </div>
    </form>
  );
}
