import { Dispatch, SetStateAction } from 'react';
import { DiReact } from 'react-icons/di';
import {
  FiBookmark,
  FiHeart,
  FiInfo,
  FiMessageSquare,
  FiShare2,
  FiX
} from 'react-icons/fi';

import queryClient from '../../../config/queryClient';
import { IPowst } from '../../../types/createPowstTypes/createPowst.types';
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';
import CustomImage from '../../images/CustomImage/CustomImage';
import UserProfileDividerLink from '../../links/UserProfileDividerLink/UserProfileDividerLink';
import Powst from '../Powst';

// declare props types
interface IPowstDetailsModalProps {
  powstToBeShown?: string;
  setPowstToBeShown: Dispatch<SetStateAction<string>>;
}

export default function PowstDetailsModal({
  powstToBeShown,
  setPowstToBeShown
}: IPowstDetailsModalProps) {
  const allPowsts = queryClient.getQueryData<IPowst[]>(['allPowsts']);

  const { title, description, alt, image, live, source } =
    allPowsts?.find((powst) => powst._id === powstToBeShown) || {};

  const sameUserPowsts = allPowsts
    ?.filter((item) => item._id !== powstToBeShown)
    ?.slice(0, 3);

  const handleClosePowstDetailsModal = () => {
    setPowstToBeShown('');
  };

  return (
    <dialog
      id='powst_details_modal'
      className='modal'
    >
      <div className='modal-box rounded-md max-w-[1000px] p-0'>
        <div className='max-w-[800px] flex mx-auto pb-12'>
          <div className='flex-grow h-full '>
            <div className='w-full sticky top-0 p-4 bg-base-100 z-10'>
              <h2 className='text-2xl font-semibold mb-2'>{title}</h2>

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
                      alt: alt ? alt : 'Random',
                      src: image
                    }
                  }}
                  aspectRatio='aspect-[4/3]'
                />
              </div>

              <p>{description}</p>

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

                {(live || source) && (
                  <div className='flex w-full sm:w-auto gap-2 flex-shrink-0'>
                    {live && (
                      <a
                        href={live}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <button className='btn btn-primary btn-sm flex-grow'>
                          Live Preview
                        </button>
                      </a>
                    )}

                    {source && (
                      <a
                        href={source}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <button className='btn btn-outline btn-sm flex-grow'>
                          Source Code
                        </button>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className='flex flex-wrap gap-2 mb-12'>
                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>
                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>
                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>

                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>

                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>
                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>

                <div className='badge badge-outline badge-sm py-2.5'>
                  #default
                </div>
              </div>

              <UserProfileDividerLink />

              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <h4 className='font-semibold text-sm'>More by Sudesh Das</h4>

                  <button className='btn btn-link btn-xs'>View Profile</button>
                </div>

                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                  {sameUserPowsts?.map((powst) => (
                    <Powst
                      sameUser
                      setPowstToBeShown={setPowstToBeShown}
                      powstDetails={powst}
                      key={powst._id}
                    />
                  ))}
                </div>
              </div>

              <div className='divider'></div>

              {/* <div className='flex flex-col gap-4'>
                <h4 className='font-semibold text-sm'>You might also like</h4>

                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                  <Powst />

                  <Powst />

                  <Powst />
                </div>
              </div> */}
            </div>
          </div>

          <div className='w-12 flex flex-col h-fit items-center gap-2 pt-2 sticky top-0 p-4'>
            <form method='dialog'>
              <button
                className='btn btn-sm btn-square btn-ghost'
                onClick={handleClosePowstDetailsModal}
              >
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
      </div>

      <form
        method='dialog'
        className='modal-backdrop bg-black opacity-70'
      >
        <button onClick={handleClosePowstDetailsModal}>close</button>
      </form>
    </dialog>
  );
}
