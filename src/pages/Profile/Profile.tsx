import { useEffect, useState } from 'react';
import { FiInfo, FiLink, FiMail, FiMapPin } from 'react-icons/fi';
import { LuFileSignature } from 'react-icons/lu';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import socialIconsList from '../../assets/icons/socialIcons';
import UserAvatar from '../../components/avatars/UserAvatar/UserAvatar';
import useAuthContext from '../../contexts/AuthContext/authContext.hook';
import useDocumentTitle from '../../hooks/useDocumentTitle/useDocumentTitle';
import useGetUserDetails from '../../queries/getUserDetails/useGetUserDetails';
import { removeTokensFromLocalStorage } from '../../utils/localStorage/removeTokensFromLocalStorage/removeTokensFromLocalStorage';

import { profileTabsList } from './profile.data';
import ProfileSkeleton from './ProfileSkeleton';

export default function Profile() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const { setDocumentTitle } = useDocumentTitle('Catalyst | Profile');
  const { authState, authDispatch } = useAuthContext();

  const { data: userDetails, isPending: isUserDetailsPending } =
    useGetUserDetails({ userId: authState.userId });

  const [profileTab, setProfileTab] = useState<string>(
    searchParams?.get('tab') || 'portfolio'
  );

  const handleProfileTabChange = (tab: string) => {
    setProfileTab(tab);
    setSearchParams({ tab });
  };

  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT', payload: {} });

    removeTokensFromLocalStorage();

    navigate('/feed');
  };

  useEffect(() => {
    setDocumentTitle(
      `Catalyst | ${userDetails?.firstName} ${userDetails?.lastName}`
    );
  }, [setDocumentTitle, userDetails]);

  const renderedSocialIcons = userDetails?.socials
    ?.filter((social) => social.name !== 'portfolio')
    .map(({ name, link }) => {
      const { icon: Icon } = socialIconsList.find(
        (item) => item.name === name
      ) || { icon: FiInfo };

      return (
        <a
          key={name}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-square btn-ghost btn-sm hover:bg-inherit group'
        >
          <Icon className='h-5 w-5 text-base-content group-hover:text-primary transition-colors' />
        </a>
      );
    });

  return isUserDetailsPending ? (
    <ProfileSkeleton />
  ) : (
    <main className='flex-grow flex flex-col gap-6 w-full'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <UserAvatar
            src={String(userDetails?.profilePic)}
            name='Sudesh Das'
            variant='avatar'
            size='2xl'
          />

          <div>
            <h2 className='font-semibold text-3xl lg:text-4xl'>
              {userDetails?.firstName} {userDetails?.lastName}
            </h2>

            <h3>{userDetails?.headline}</h3>
          </div>
        </div>

        {/* <button className='btn btn-sm btn-primary'>Follow</button> */}

        {/* <button className='btn btn-square btn-sm btn-primary btn-outline'>
            <FiCheck />
          </button> */}

        <button
          className='btn btn-sm btn-error btn-outline'
          onClick={handleLogout}
        >
          Logout
        </button>

        {/* The logic written here is to send the user to the relevant form depending
          on the tab they currently are. For example, if the user is in about tab, they will
          go directly to the edit about form  */}
        <Link
          to={`/edit-profile?form=${
            searchParams?.get('tab') === 'about' ? 'about' : 'basic'
          }`}
        >
          <button className='btn btn-sm btn-outline'>
            <LuFileSignature />
            Edit
          </button>
        </Link>
      </div>

      <div className='flex justify-between items-start flex-col gap-4 sm:flex-row'>
        <div className='flex flex-col gap-2'>
          {userDetails?.location && (
            <div className='flex w-fit gap-2 items-center'>
              <FiMapPin className='h-4 w-4' />

              <p className='text-xs lg:text-sm'>{userDetails?.location}</p>
            </div>
          )}

          {userDetails?.socials?.find(
            (social) => social.name === 'portfolio'
          ) && (
            <a
              href={
                userDetails?.socials?.find(
                  (social) => social.name === 'portfolio'
                )?.link
              }
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-fit gap-2 items-center hover:text-primary'
            >
              <FiLink className='h-4 w-4' />

              <p className='text-xs lg:text-sm'>
                {
                  userDetails?.socials?.find(
                    (social) => social.name === 'portfolio'
                  )?.link
                }
              </p>
            </a>
          )}

          <a
            href='mailto:sudeshkumardas7@gmail.com'
            className='flex w-fit gap-2 items-center hover:text-primary'
          >
            <FiMail className='h-4 w-4' />

            <p className='text-xs lg:text-sm'>{userDetails?.email}</p>
          </a>
        </div>

        {searchParams?.get('tab') !== 'about' && (
          <div className='flex flex-wrap sm:justify-end md:max-w-[200px]'>
            {renderedSocialIcons}
          </div>
        )}
      </div>

      <div
        role='tablist'
        className='tabs tabs-bordered max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-8rem)] overflow-auto w-full grid-cols-5 md:grid-cols-none'
      >
        {profileTabsList?.map((tab) => (
          <>
            <input
              type='radio'
              name='profile_tabs'
              role='tab'
              className='tab sticky top-0 bg-base-100 w-full'
              aria-label={tab.label}
              checked={profileTab === tab.name}
              onChange={() => handleProfileTabChange(tab.name)}
            />

            <tab.panel />
          </>
        ))}
      </div>
    </main>
  );
}

// IDEA @thesudeshdas => Show analytics on the bottom right like number of followers gained, powst engagement, etc

// TODO @thesudeshdas => Create a logout component, a modal confirmation for logging out which should navigate to /feed on logging out

// IDEA @thesudeshdas => The tags for the user should be auto generated, this will depend on the work experience and the project experience. Suppose,
// someone has crated 2 react projects and 1 css, then react will be shown first, then css

// TODO @thesudeshdas => Create hide above and below component which takes child and a width
// like 'lg', 'md' and shows or hides the component

// TODO @thesudeshdas => Create a component for the right side panel

// TODO @thesudeshdas => For the profile pic, have a fallback image

// <div className='flex gap-3 flex-wrap'>
//   <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
//     <img
//       src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
//       className='h-3 w-3 object-contain'
//     />
//     ReactJS
//   </div>
//   <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
//     <img
//       src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
//       className='h-3 w-3 object-contain'
//     />
//     ReactJS
//   </div>
//   <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
//     <img
//       src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
//       className='h-3 w-3 object-contain'
//     />
//     ReactJS
//   </div>
//   <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
//     <img
//       src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
//       className='h-3 w-3 object-contain'
//     />
//     ReactJS
//   </div>
//   <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
//     <img
//       src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
//       className='h-3 w-3 object-contain'
//     />
//     ReactJS
//   </div>
//   <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
//     <img
//       src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
//       className='h-3 w-3 object-contain'
//     />
//     ReactJS
//   </div>
// </div>;
