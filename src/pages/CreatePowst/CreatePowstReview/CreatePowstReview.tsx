// import react
import { useEffect, useState } from 'react';

// import rrd
import { useLocation } from 'react-router-dom';

// import icons

// import hook
import useCreatePowst from '../../../layouts/CreatePowstLayout/createPowstLayout.hook';
import useCreatePowstServer from '../../../mutations/createPowst/useCreatePowst.hook';
import useAuthContext from '../../../contexts/AuthContext/authContext.hook';

// import components
import UserAvatar from '../../../components/avatars/UserAvatar/UserAvatar';
import CustomImage from '../../../components/images/CustomImage/CustomImage';
import CreatePowstPreviousButton from '../../../components/forms/createPowst/CreatePowstPreviousButton/CreatePowstPreviousButton';

export default function CreatePowstReview() {
  const { pathname } = useLocation();

  const { state } = useAuthContext();
  const { localPowst, setActiveStep } = useCreatePowst();

  const { mutate } = useCreatePowstServer();

  const [file] = useState<File>(localPowst?.image);
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>();

  const handleCreatePowst = () => {
    mutate({
      title: localPowst?.title,
      live: localPowst?.live,
      source: localPowst?.source,
      description: localPowst?.description,
      techStack: localPowst?.techStack,
      image: localPowst?.image,
      imageAlt: localPowst?.alt,
      owner: state.userId
    });
  };

  useEffect(() => {
    if (pathname.includes('review')) {
      setActiveStep(4);
    }
  }, [pathname, setActiveStep]);

  useEffect(() => {
    let fileReader: FileReader;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);

      console.log({ fileReader });
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  console.log('from review', localPowst);

  return (
    <main className='flex flex-col gap-4 items-center'>
      <h2 className='text-center font-bold text-xl'>Powst Review 2</h2>

      <div className='max-w-[800px] p-4 border textarea-bordered rounded-md w-full'>
        <div className='max-w-[800px] flex flex-col mx-auto pb-12'>
          <div className='w-full p-4 bg-base-100 '>
            <h2 className='text-2xl font-semibold mb-2'>{localPowst?.title}</h2>

            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
              variant='profile'
              size='md'
            />
          </div>

          <div className='flex flex-col gap-4 bg-red'>
            <div className='aspect-[4/3] w-full rounded-md mx-auto overflow-hidden'>
              <CustomImage
                imgSources={{
                  small: {
                    alt: 'Random',
                    src: String(fileDataURL)
                  }
                }}
                aspectRatio='aspect-[4/3]'
              />
            </div>

            <p>{localPowst?.description}</p>

            <div className='flex flex-col sm:flex-row gap-4 justify-between'>
              <div className='flex flex-wrap gap-3'>
                {localPowst?.techStack.map((icon) => {
                  console.log({ icon });

                  return (
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.version}.svg`}
                      alt={icon.name}
                      className='h-8 w-8'
                      key={icon.name}
                    />
                  );
                })}
              </div>

              {(localPowst?.live || localPowst?.source) && (
                <div className='flex w-full sm:w-auto gap-2 flex-shrink-0'>
                  {localPowst?.live && (
                    <a
                      href={localPowst?.live}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <button className='btn btn-primary btn-sm flex-grow'>
                        Live Preview
                      </button>
                    </a>
                  )}

                  {localPowst?.source && (
                    <a
                      href={localPowst?.source}
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

            {/* <UserProfileDividerLink /> */}
          </div>
        </div>
      </div>

      <div className='flex justify-between w-full max-w-[800px]'>
        <CreatePowstPreviousButton link='/create/image' />

        <button
          className='btn btn-primary'
          onClick={handleCreatePowst}
        >
          Create
        </button>
      </div>
    </main>
  );
}
