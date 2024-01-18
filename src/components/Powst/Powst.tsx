// import icons
import { FiHeart } from 'react-icons/fi';

// import components
import CustomImage from '../images/CustomImage/CustomImage';
import UserAvatar from '../avatars/UserAvatar/UserAvatar';

// declare props types
interface IPowstProps {
  sameUser?: boolean;
}

export default function Powst({ sameUser = false }: IPowstProps) {
  return (
    <div className='flex flex-col gap-2'>
      {!sameUser && (
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
              variant='profile'
            />
          </div>
        </div>
      )}

      <div
        className='aspect-[4/3] relative rounded-md group overflow-hidden cursor-pointer'
        onClick={() =>
          (
            document.getElementById('powst_details_modal') as HTMLDialogElement
          )?.showModal()
        }
      >
        <div className='aspect-[4/3] w-full'>
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

        <div className='absolute bottom-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity'></div>

        <div className='w-full h-full absolute bottom-0 left-0 translate-y-full md:group-hover:translate-y-0 transition-transform duration-100'>
          <p className='absolute bottom-2 left-2 right-2 line-clamp-3 text-xs text-neutral-content font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugit,
            excepturi magnam omnis animi rerum culpa blanditiis perferendis
            praesentium perspiciatis veritatis illo, nisi explicabo eos quo
            molestiae nulla enim minima.
          </p>
        </div>
      </div>

      <div className='flex justify-between items-start gap-6'>
        <h2
          className='line-clamp-1 cursor-pointer'
          onClick={() =>
            (
              document.getElementById(
                'powst_details_modal'
              ) as HTMLDialogElement
            )?.showModal()
          }
        >
          E-commerce web app
        </h2>

        <div className='flex flex-shrink-0 gap-2 items-center mt-0.5 hover:text-red-500 cursor-pointer transition-colors'>
          <FiHeart />

          <p className='text-sm'>50k</p>
        </div>
      </div>
    </div>
  );
}
