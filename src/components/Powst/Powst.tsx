import { Dispatch, SetStateAction } from 'react';
import { LuHeart } from 'react-icons/lu';

import { IPowst } from '../../types/powstTypes/powst.types';
import UserAvatar from '../avatars/UserAvatar/UserAvatar';
import CustomImage from '../images/CustomImage/CustomImage';

// declare props types
interface IPowstProps {
  sameUser?: boolean;
  powstDetails: Partial<IPowst>;
  setPowstToBeShown: Dispatch<SetStateAction<string>>;
}

export default function Powst({
  sameUser = false,
  powstDetails,
  setPowstToBeShown
}: IPowstProps) {
  const { description, title, imageAlt, image, _id, owner } =
    powstDetails || {};

  const handleOpenPowstDetailsModal = () => {
    (
      document.getElementById('powst_details_modal') as HTMLDialogElement
    )?.showModal();

    setPowstToBeShown(_id || '');
  };

  return (
    <div className='flex flex-col gap-2'>
      {!sameUser && owner?.profilePic && (
        <UserAvatar
          src={owner?.profilePic}
          name={`${owner?.firstName} ${owner?.lastName}`}
          variant='profile'
          username={owner?.username || 'no-username-found'}
        />
      )}

      <div
        className='aspect-[4/3] relative rounded-md group overflow-hidden cursor-pointer'
        onClick={handleOpenPowstDetailsModal}
      >
        <div className='aspect-[4/3] w-full'>
          {image && (
            <CustomImage
              imgSources={{
                small: {
                  alt: imageAlt ? imageAlt : 'Random',
                  src: image
                }
              }}
              aspectRatio='aspect-[4/3]'
            />
          )}
        </div>

        <div className='absolute bottom-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity'></div>

        <div className='w-full h-full absolute bottom-0 left-0 translate-y-full md:group-hover:translate-y-0 transition-transform duration-100'>
          <p className='absolute bottom-2 left-2 right-2 line-clamp-3 text-xs text-neutral-content font-medium'>
            {description}
          </p>
        </div>
      </div>

      <div className='flex justify-between items-start gap-6'>
        <h2
          className='line-clamp-1 cursor-pointer'
          onClick={handleOpenPowstDetailsModal}
        >
          {title}
        </h2>

        <div className='flex flex-shrink-0 gap-2 items-center mt-0.5 hover:text-red-500 cursor-pointer transition-colors'>
          <LuHeart />

          <p className='text-sm'>50k</p>
        </div>
      </div>
    </div>
  );
}
