import EditProfileBasicForm from '../../../forms/editProfile/EditProfileBasicForm/EditProfileBasicForm';

export default function BasicModal() {
  return (
    <>
      <button
        className='w-full p-4'
        onClick={() =>
          (
            document.getElementById(
              'edit_profile_basic_modal'
            ) as HTMLDialogElement
          )?.showModal()
        }
      >
        Basic
      </button>
      <dialog
        id='edit_profile_basic_modal'
        className='modal'
      >
        <div className='modal-box'>
          <EditProfileBasicForm />
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
