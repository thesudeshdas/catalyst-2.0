import { Dispatch, SetStateAction } from 'react';
import {
  LuBookmark,
  LuHeart,
  LuInfo,
  LuMessageSquare,
  LuShare2,
  LuX
} from 'react-icons/lu';

import queryClient from '../../../config/queryClient';
import * as apiKeys from '../../../constants/apisKeys.constants';
import { IPowst } from '../../../types/powstTypes/powst.types';
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';
import CustomImage from '../../images/CustomImage/CustomImage';
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
  const allPowsts = queryClient.getQueryData<IPowst[]>([
    apiKeys.powst.GET_ALL_POWSTS
  ]);

  const {
    title,
    description,
    imageAlt,
    image,
    live,
    source,
    owner,
    techStack,
    keywords
  } = allPowsts?.find((powst) => powst._id === powstToBeShown) || {};

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
      <div className='modal-box rounded-md !max-w-[800px] p-0'>
        <div className='flex mx-auto pb-12'>
          <div className='flex-grow h-full '>
            <div className='w-full sticky top-0 p-4 bg-base-100 z-10'>
              <h2 className='text-2xl font-semibold mb-2'>{title}</h2>

              {owner?.profilePic && (
                <UserAvatar
                  src={owner.profilePic}
                  name={`${owner.firstName} ${owner.lastName}`}
                  username={owner?.username || 'no-username-found'}
                  userId={owner?._id || 'no-userId'}
                  variant='profile'
                  size='md'
                  followAction
                />
              )}
            </div>

            <div className='p-4 pt-0 pr-0 flex flex-col gap-4 bg-red'>
              {image && (
                <div className='aspect-[4/3] w-full rounded-md mx-auto overflow-hidden'>
                  <CustomImage
                    imgSources={{
                      small: {
                        alt: imageAlt ? imageAlt : 'Random',
                        src: image
                      }
                    }}
                    aspectRatio='aspect-[4/3]'
                  />
                </div>
              )}

              <p>{description}</p>

              <div className='flex flex-col sm:flex-row gap-4 justify-between'>
                <div className='flex flex-wrap gap-3'>
                  {techStack?.map((icon) => (
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.version}.svg`}
                      alt={icon.name}
                      className='h-6 w-6'
                      key={icon.name}
                    />
                  ))}
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

              {keywords && keywords?.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-12'>
                  {keywords?.map((keyword, index) => (
                    <div
                      key={`pill_${index}_${keyword}`}
                      className='badge cursor-pointer badge-outline'
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              )}

              {owner?.profilePic && (
                <UserAvatar
                  src={owner.profilePic}
                  name={`${owner.firstName} ${owner.lastName}`}
                  variant='divider'
                  size='xl'
                  followAction
                  username={owner?.username || 'no-username-found'}
                  userId={owner?._id || 'no-userId'}
                />
              )}

              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <h4 className='font-semibold text-sm'>
                    More by {owner?.firstName} {owner?.lastName}
                  </h4>

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
                <LuX className='h-[1.2rem] w-[1.2rem]' />
              </button>
            </form>

            {owner?.profilePic && (
              <button className='btn btn-sm btn-square btn-ghost hover:bg-transparent'>
                <UserAvatar
                  src={owner?.profilePic}
                  name={`${owner?.firstName} ${owner?.lastName}`}
                  username={owner?.username || 'no-username-found'}
                  userId={owner?._id || 'no-userId'}
                />
              </button>
            )}

            <button className='btn btn-sm btn-square btn-ghost'>
              <LuMessageSquare className='h-[1.2rem] w-[1.2rem]' />
            </button>

            <button className='btn btn-sm btn-square btn-ghost'>
              <LuShare2 className='h-[1.2rem] w-[1.2rem]' />
            </button>

            <button className='btn btn-sm btn-square btn-ghost'>
              <LuInfo className='h-[1.2rem] w-[1.2rem]' />
            </button>

            <button className='btn btn-sm btn-square btn-ghost'>
              <LuBookmark className='h-[1.2rem] w-[1.2rem]' />
            </button>

            <button className='btn btn-sm btn-square btn-ghost hover:bg-transparent hover:text-error'>
              <LuHeart className='h-[1.2rem] w-[1.2rem]' />
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
