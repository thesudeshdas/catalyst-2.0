import { Fragment, useEffect, useState } from 'react';
import { LuInfo, LuLink, LuMail, LuMapPin, LuPlus } from 'react-icons/lu';
import { LuFileSignature } from 'react-icons/lu';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import socialIconsList from '../../assets/icons/socialIcons';
import UserAvatar from '../../components/avatars/UserAvatar/UserAvatar';
import Logout from '../../components/Logout/Logout';
import useAuthContext from '../../contexts/AuthContext/authContext.hook';
import useDocumentTitle from '../../hooks/useDocumentTitle/useDocumentTitle';
import useFollowUser from '../../mutations/followUser/useFollowUser.mutation';
import useUnfollowUser from '../../mutations/unfollowUser/useUnfollowUser.mutation';
import useGetUserDetails from '../../queries/getUserDetails/useGetUserDetails';

import { profileTabsList } from './profile.data';
import ProfileSkeleton from './ProfileSkeleton';

export default function Profile() {
  const { username } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setDocumentTitle } = useDocumentTitle('Catalyst | Profile');
  const { authState } = useAuthContext();

  const { data: userDetails, isPending: isUserDetailsPending } =
    useGetUserDetails({
      userId: username && username !== 'profile' ? username : authState.username
    });

  const { data: authUserDetails } = useGetUserDetails({
    userId: authState.username
  });

  const { mutate: mutateFollowUser } = useFollowUser({
    userId: authState.userId
  });

  const { mutate: mutateUnfollowUser } = useUnfollowUser({
    userId: authState.userId
  });

  const [profileTab, setProfileTab] = useState<string>(
    searchParams?.get('tab') || 'portfolio'
  );

  const handleFollowUser = () => {
    mutateFollowUser({
      userId: authState.userId,
      userToFollow: userDetails?._id ?? ''
    });
  };

  const handleUnfollowUser = () => {
    mutateUnfollowUser({
      userId: authState.userId,
      userToUnfollow: userDetails?._id ?? ''
    });
  };

  const handleProfileTabChange = (tab: string) => {
    setProfileTab(tab);
    setSearchParams({ tab });
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
      ) || { icon: LuInfo };

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
          {userDetails?.profilePic && (
            <UserAvatar
              src={userDetails?.profilePic}
              name={`${userDetails?.firstName} ${userDetails?.lastName}`}
              variant='avatar'
              size='2xl'
              username={'no-username-found'}
              noRedirect
            />
          )}

          <div>
            <h2 className='font-semibold text-3xl lg:text-4xl'>
              {userDetails?.firstName} {userDetails?.lastName}
            </h2>

            <h3>{userDetails?.headline}</h3>
          </div>
        </div>

        <Logout />

        {username === authState.username ? (
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
        ) : authUserDetails?.followings?.includes(userDetails?._id || '') ? (
          <button
            className='btn btn-sm btn-primary'
            onClick={handleUnfollowUser}
          >
            <LuPlus className='h-4 w-4' />
            UnFollow
          </button>
        ) : (
          <button
            className='btn btn-sm btn-primary'
            onClick={handleFollowUser}
          >
            <LuPlus className='h-4 w-4' />
            Follow
          </button>
        )}
      </div>

      <div className='flex justify-between items-start flex-col gap-4 sm:flex-row'>
        <div className='flex flex-col gap-2'>
          {userDetails?.location && (
            <div className='flex w-fit gap-2 items-center'>
              <LuMapPin className='h-4 w-4' />
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
              <LuLink className='h-4 w-4' />
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
            href={`mailto:${userDetails?.email}`}
            className='flex w-fit gap-2 items-center hover:text-primary'
          >
            <LuMail className='h-4 w-4' />
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
          <Fragment key={tab.name}>
            <input
              type='radio'
              name='profile_tabs'
              role='tab'
              className='tab sticky top-0 bg-base-100 w-full z-20'
              aria-label={tab.label}
              checked={profileTab === tab.name}
              onChange={() => handleProfileTabChange(tab.name)}
            />

            <tab.panel
              username={
                username && username !== 'profile'
                  ? username
                  : authState.username
              }
            />
          </Fragment>
        ))}
      </div>
    </main>
  );
}

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
