import { FiX } from 'react-icons/fi';
import CustomImage from '../../images/CustomImage/CustomImage';

export default function PowstDetailsModal() {
  return (
    <dialog
      id='powst_details_modal'
      className='modal'
    >
      <div className='modal-box h-scree rounded-md max-w-[1200px] p-0'>
        <div className='flex items-start justify-between w-full sticky top-0 p-4 bg-base-100'>
          <h2 className='text-lg'>An e commerce web app</h2>

          <form method='dialog'>
            <button className='btn btn-sm btn-square btn-ghost'>
              <FiX />
            </button>
          </form>
        </div>

        <div className='p-4 pt-0'>
          <div className='aspect-[4/3] w-full rounded-md overflow-hidden'>
            <CustomImage
              imgSources={{
                small: {
                  alt: 'Random',
                  src: 'https://picsum.photos/400/600'
                }
              }}
              aspectRatio='aspect-[4/3]'
            />
          </div>

          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Press ESC key or click outside to close</p>

          <div className='w-2 h-[50rem] bg-red-400'></div>
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
