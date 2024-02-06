// import components
import EditProfileSocialForm from '../../../forms/editProfile/EditProfileSocialForm/EditProfileSocialForm';

export default function SocialModal() {
  return (
    <>
      <button
        className='w-full p-4'
        onClick={() =>
          (
            document.getElementById(
              'edit_profile_social_modal'
            ) as HTMLDialogElement
          )?.showModal()
        }
      >
        Socials
      </button>
      <dialog
        id='edit_profile_social_modal'
        className='modal'
      >
        <div className='modal-box '>
          <EditProfileSocialForm />
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
