// import icons
import { SiMedium } from 'react-icons/si';

// import components
import UserAvatar from '../avatars/UserAvatar/UserAvatar';

// declare props types
interface IBlogPowstProps {
  sameUser?: boolean;
}

export default function BlogPowst({ sameUser }: IBlogPowstProps) {
  return (
    <div className='flex flex-col gap-2 group'>
      {!sameUser && (
        <div className='flex justify-between items-center ml-1'>
          <div className='flex gap-2 items-center'>
            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
              variant='profile'
            />
          </div>
        </div>
      )}

      <div className='aspect-[16/9] rounded-md border input-bordered cursor-pointer p-4 flex flex-col justify-between group-hover:bg-base-200'>
        <h4 className='font-semibold text-2xl sm:text-xl md:text-2xl xl:text-3xl line-clamp-4'>
          How to make better technical decisions and something else as well
        </h4>

        <div className='flex justify-between items-end gap-6'>
          <h2 className='text-xs'>20th Dec, 2023</h2>

          <SiMedium className='h-8 w-8' />
        </div>
      </div>
    </div>
  );
}
