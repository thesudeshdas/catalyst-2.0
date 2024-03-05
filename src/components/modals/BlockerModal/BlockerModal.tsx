// declare props types
interface IBlockerModalProps {
  cancelNavigation: () => void;
  discardAndNavigate: (executeFunction?: Function) => void;
  executeFunction: Function;
}

export default function BlockerModal({
  cancelNavigation,
  executeFunction,
  discardAndNavigate
}: IBlockerModalProps) {
  const handleCancelNavigation = () => {
    cancelNavigation();
  };

  return (
    <dialog
      id='blocker_navigation_modal'
      className='modal'
    >
      <div className='modal-box rounded-md'>
        <form method='dialog'>
          <button
            className='btn btn-sm btn-square btn-ghost absolute right-2 top-2'
            onClick={handleCancelNavigation}
          >
            ✕
          </button>
        </form>

        <h3 className='font-bold text-lg'>Discard Changes</h3>

        <p className='my-2'>
          You are about to discard all the changes made now, are you sure?
        </p>

        <div className='flex gap-4 justify-end'>
          <button
            onClick={() => discardAndNavigate(executeFunction)}
            className='btn btn-error btn-outline'
          >
            Discard
          </button>

          <button
            onClick={() => cancelNavigation()}
            className='btn btn-primary'
          >
            Cancel
          </button>
        </div>
      </div>

      <form
        method='dialog'
        className='modal-backdrop'
      >
        <button>close</button>
      </form>
    </dialog>
  );
}
