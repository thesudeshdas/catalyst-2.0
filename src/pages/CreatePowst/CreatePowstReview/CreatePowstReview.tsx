// import react
import { useEffect } from 'react';

// import rrd
import { useLocation } from 'react-router-dom';

// import icons
import { DiReact } from 'react-icons/di';

// import hook
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';

// import components
import UserAvatar from '../../../components/avatars/UserAvatar/UserAvatar';
import CustomImage from '../../../components/images/CustomImage/CustomImage';
import UserProfileDividerLink from '../../../components/links/UserProfileDividerLink/UserProfileDividerLink';
import CreatePowstPreviousButton from '../../../components/forms/createPowst/CreatePowstPreviousButton/CreatePowstPreviousButton';

export default function CreatePowstReview() {
  const { pathname } = useLocation();

  const { setActiveStep } = useCreatePowst();

  useEffect(() => {
    if (pathname.includes('review')) {
      setActiveStep(4);
    }
  }, [pathname, setActiveStep]);

  return (
    <main className='flex flex-col gap-4 items-center'>
      <h2 className='text-center font-bold text-xl'>Powst Review</h2>

      <div className='max-w-[800px] p-4 border textarea-bordered rounded-md'>
        <div className='max-w-[800px] flex flex-col mx-auto pb-12'>
          <div className='w-full p-4 bg-base-100 '>
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

          <div className='flex flex-col gap-4 bg-red'>
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
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
                <DiReact className='h-6 w-6' />
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
          </div>
        </div>
      </div>

      <div className='flex justify-between w-full max-w-[800px]'>
        <CreatePowstPreviousButton link='/create/image' />

        <button className='btn btn-primary'>Create</button>
      </div>
    </main>
  );
}
