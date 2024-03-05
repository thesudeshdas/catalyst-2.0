import { LuLink } from 'react-icons/lu';
import { SiDevdotto, SiHashnode, SiMedium } from 'react-icons/si';

import { IBlog, IBlogPlatform } from '../../types/blogTypes/blog.types';
import UserAvatar from '../avatars/UserAvatar/UserAvatar';

// declare props types
interface IBlogPowstProps {
  sameUser?: boolean;
  blogDetails?: Partial<IBlog>;
}

const renderPlatformIcon = (platform: IBlogPlatform) => {
  switch (platform) {
    case 'medium':
      return <SiMedium className='h-8 w-8' />;

    case 'hashnode':
      return <SiHashnode className='h-8 w-8' />;

    case 'devTo':
      return <SiDevdotto className='h-8 w-8' />;

    default:
      return <LuLink className='h-8 w-8' />;
  }
};

export default function BlogPowst({ sameUser, blogDetails }: IBlogPowstProps) {
  return (
    <div className='flex flex-col gap-2 group'>
      {!sameUser && (
        <div className='flex justify-between items-center ml-1'>
          <div className='flex gap-2 items-center'>
            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
              variant='profile'
              username={'no-username-found'}
            />
          </div>
        </div>
      )}

      <div className='aspect-[4/3] rounded-md border input-bordered cursor-pointer p-4 flex flex-col justify-between group-hover:bg-base-200'>
        <h4 className='font-medium text-2xl sm:text-xl md:text-2xl xl:text-2xl line-clamp-4'>
          {blogDetails?.title}
        </h4>

        <div className='flex justify-between items-end gap-6'>
          <h2 className='text-xs'>20th Dec, 2023</h2>

          {/* {blogDetails?.platform === 'medium' ? (
            <SiMedium className='h-8 w-8' />
          ) : (
            <LuLink className='h-8 w-8' />
          )} */}

          {blogDetails?.platform && renderPlatformIcon(blogDetails?.platform)}
        </div>
      </div>
    </div>
  );
}
