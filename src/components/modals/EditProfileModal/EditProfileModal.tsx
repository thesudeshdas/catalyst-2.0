// declare props types
interface IEditProfileModalProps {
  nameId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  heading: string;
}

export default function EditProfileModal({
  heading,
  form: Form,
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
        <div className='modal-box'>
          <Form nameId={nameId} />
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
