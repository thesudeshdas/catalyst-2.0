import { useNavigate } from 'react-router-dom';

import useAuthContext from '../../../contexts/AuthContext/authContext.hook';

export default function LoginPromptModal() {
  const navigate = useNavigate();

  const {
    authState: { showModal },
    authDispatch
  } = useAuthContext();

  const hideModal = () => {
    authDispatch({ type: 'HIDE_MODAL' });
  };

  const navigateToLogin = () => {
    authDispatch({ type: 'HIDE_MODAL' });
    navigate('/login');
  };

  return (
    <dialog
      id='blocker_navigation_modal'
      className={`modal ${showModal ? 'modal-open' : ''}`}
    >
      <div className='modal-box rounded-md'>
        <form method='dialog'>
          <button
            className='btn btn-sm btn-square btn-ghost absolute right-2 top-2'
            onClick={hideModal}
          >
            ✕
          </button>
        </form>

        <h3 className='font-bold text-lg'>Login Required</h3>

        <p className='my-2'>
          Hey! Looks like you need to login before doing this action
        </p>

        <div className='flex gap-4 justify-end mt-4'>
          <button
            className='btn btn-outline  flex-grow sm:flex-grow-0'
            onClick={hideModal}
          >
            Nah, I'm good
          </button>

          <button
            onClick={navigateToLogin}
            className='btn btn-primary  flex-grow sm:flex-grow-0'
          >
            Take me to Login
          </button>
        </div>
      </div>

      <form
        method='dialog'
        className='modal-backdrop'
      >
        <button onClick={hideModal}>close</button>
      </form>
    </dialog>
  );
}
