import { LuPlus } from 'react-icons/lu';

import EditBlogForm from '../../forms/createBlog/CreateBlogForm/EditBlogForm';

export default function EditBlogModal() {
  return (
    <>
      <button
        className='aspect-[4/3] w-full bg-base-300 flex flex-col items-center justify-center rounded-md cursor-pointer'
        onClick={() =>
          (
            document.getElementById('edit_blog_modal') as HTMLDialogElement
          )?.showModal()
        }
      >
        <LuPlus className='w-16 h-16' />

        <p className='text-sm'>Add a new blog</p>
      </button>

      <dialog
        id='edit_blog_modal'
        className='modal'
      >
        <div className='modal-box'>
          <EditBlogForm />
        </div>

        <form
          method='dialog'
          className='modal-backdrop backdrop-blur-sm'
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
