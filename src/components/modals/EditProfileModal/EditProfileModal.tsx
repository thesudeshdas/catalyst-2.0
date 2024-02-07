// declare props types
interface IEditProfileModalProps {
  nameId: string;
  form: Function;
  heading: string;
}

export default function EditProfileModal({
  heading,
  form,
  nameId
}: IEditProfileModalProps) {
  return (
    <>
      <button
        className='w-full p-4'
        onClick={() =>
          (document.getElementById(nameId) as HTMLDialogElement)?.showModal()
        }
      >
        {heading}
      </button>
      <dialog
        id={nameId}
        className='modal'
      >
        <div className='modal-box'>{form()}</div>

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
