// import react
import { useEffect } from 'react';

// import icons
import {
  FiBookmark,
  FiHeart,
  FiInfo,
  FiMessageSquare,
  FiShare2,
  FiX
} from 'react-icons/fi';
import { DiReact } from 'react-icons/di';

// import components
import CustomImage from '../../images/CustomImage/CustomImage';
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';
import UserProfileDividerLink from '../../links/UserProfileDividerLink/UserProfileDividerLink';
import Powst from '../Powst';

export default function PowstDetailsModal() {
  useEffect(() => {
    document.getElementById('powst_details_modal')?.scrollTo(0, 0);
  }, []);

  return (
    <dialog
      id='powst_details_modal'
      className='modal'
    >
      <div className='modal-box rounded-md max-w-[800px] p-0 flex'>
        <div className='flex-grow h-full '>
          <div className='w-full sticky top-0 p-4 bg-base-100 z-10'>
            <h2 className='text-lg font-semibold mb-2'>
              An e commerce web app
            </h2>

            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
              variant='profile'
              size='md'
              followAction
            />
          </div>

          <div className='p-4 pt-0 pr-0 flex flex-col gap-4 bg-red'>
            <div className='aspect-[4/3] w-full rounded-md mx-auto overflow-hidden'>
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

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              sequi facere eligendi mollitia dolorem quo quis non magnam!
              Eveniet reiciendis asperiores saepe blanditiis hic amet. Ratione,
              temporibus dignissimos? Voluptatem, consequuntur.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-between'>
              <div className='flex flex-wrap'>
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
                <DiReact className='h-[1.5rem] w-[1.5rem]' />
              </div>

              <div className='flex w-full sm:w-auto gap-2 flex-shrink-0'>
                <button className='btn btn-primary btn-sm flex-grow'>
                  Live Preview
                </button>

                <button className='btn btn-outline btn-sm flex-grow'>
                  Source Code
                </button>
              </div>
            </div>

            <UserProfileDividerLink />

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-sm'>More by Sudesh Das</h4>

                <button className='btn btn-link btn-xs'>View Profile</button>
              </div>

              <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <Powst sameUser />

                <Powst sameUser />

                <Powst sameUser />
              </div>
            </div>

            <div className='divider'></div>

            <div className='flex flex-col gap-4'>
              <h4 className='font-semibold text-sm'>You might also like</h4>

              <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <Powst />

                <Powst />

                <Powst />
              </div>
            </div>
          </div>
        </div>

        <div className='w-12 flex flex-col items-center gap-2 pt-2 sticky top-0 p-4'>
          <form method='dialog'>
            <button className='btn btn-sm btn-square btn-ghost'>
              <FiX className='h-[1.2rem] w-[1.2rem]' />
            </button>
          </form>

          <button className='btn btn-sm btn-square btn-ghost hover:bg-transparent'>
            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
            />
          </button>

          <button className='btn btn-sm btn-square btn-ghost'>
            <FiMessageSquare className='h-[1.2rem] w-[1.2rem]' />
          </button>

          <button className='btn btn-sm btn-square btn-ghost'>
            <FiShare2 className='h-[1.2rem] w-[1.2rem]' />
          </button>

          <button className='btn btn-sm btn-square btn-ghost'>
            <FiInfo className='h-[1.2rem] w-[1.2rem]' />
          </button>

          <button className='btn btn-sm btn-square btn-ghost'>
            <FiBookmark className='h-[1.2rem] w-[1.2rem]' />
          </button>

          <button className='btn btn-sm btn-square btn-ghost hover:bg-transparent hover:text-error'>
            <FiHeart className='h-[1.2rem] w-[1.2rem]' />
          </button>
        </div>
      </div>

      <form
        method='dialog'
        className='modal-backdrop bg-black opacity-70'
      >
        <button>close</button>
      </form>
    </dialog>
  );
}
