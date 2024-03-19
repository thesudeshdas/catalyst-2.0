import { useNavigate } from 'react-router-dom';

import useAuthContext from '../../contexts/AuthContext/authContext.hook';
import handleCloseModal from '../../utils/closeModal/closeModal.utils';
import { removeTokensFromLocalStorage } from '../../utils/localStorage/removeTokensFromLocalStorage/removeTokensFromLocalStorage';

export default function Logout() {
  const navigate = useNavigate();

  const { authDispatch } = useAuthContext();

  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT', payload: {} });

    removeTokensFromLocalStorage();

    navigate('/feed');
  };

  return (
    <>
      <button
        className='btn btn-sm btn-error btn-outline'
        onClick={() =>
          (
            document.getElementById('logout_modal') as HTMLDialogElement
          )?.showModal()
        }
      >
        Logout
      </button>

      <dialog
        id='logout_modal'
        className='modal'
      >
        <div className='modal-box'>
          <h2 className='text-2xl font-semibold mb-2'>Logout</h2>

          <p>You are about to log out of Catalyst. Are you sure?</p>

          <div className='mt-4 flex gap-3 justify-end '>
            <button
              className='btn btn-outline btn-error btn-sm'
              onClick={handleLogout}
            >
              Log out
            </button>

            <button
              onClick={() => handleCloseModal('logout_modal')}
              className='btn btn-primary btn-sm'
            >
              Explore more
            </button>
          </div>
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
