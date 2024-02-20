// import react
import { useState } from 'react';

// import rrd
import { useNavigate } from 'react-router-dom';

// import icons
import {
  FiGithub,
  FiGitlab,
  FiLink,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTwitter
} from 'react-icons/fi';

// import hooks
import useAuthContext from '../../contexts/AuthContext/authContext.hook';

// import queries & mutations
import useGetUserDetails from '../../queries/getUserDetails/useGetUserDetails';

// import utils
import { removeTokensFromLocalStorage } from '../../utils/localStorage/removeTokensFromLocalStorage/removeTokensFromLocalStorage';

// import components
import UserAvatar from '../../components/avatars/UserAvatar/UserAvatar';
import ProfileSkeleton from './ProfileSkeleton';

// import page components
import PortfolioTab from './Portfolio/Portfolio';
import ProjectsTab from './Projects/Projects';
import BlogsTab from './Blogs/Blogs';
import WorkTab from './Work/Work';
import AboutTab from './About/About';
import ProfileEditor from './ProfileEditor/ProfileEditor';

export default function Profile() {
  const navigate = useNavigate();

  const { authState, authDispatch } = useAuthContext();

  const { data: userDetails, isPending: isUserDetailsPending } =
    useGetUserDetails({ userId: authState.userId });

  const [profileTab, setProfileTab] = useState<string>('portfolio');

  const handleProfileTabChange = (tab: string) => {
    setProfileTab(tab);
  };

  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT', payload: {} });

    removeTokensFromLocalStorage();

    navigate('/feed');
  };

  return isUserDetailsPending ? (
    <ProfileSkeleton />
  ) : (
    <main className='flex gap-6 items-start flex-grow w-full'>
      <div className='flex flex-col gap-6 w-full'>
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
        </div>

        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-2'>
            {userDetails?.location && (
              <div className='flex w-fit gap-2 items-center'>
                <FiMapPin className='h-4 w-4' />

                <p className='text-xs lg:text-sm'>{userDetails?.location}</p>
              </div>
            )}

            <a
              href='https://www.thesudeshdas.com'
              className='flex w-fit gap-2 items-center'
            >
              <FiLink className='h-4 w-4' />

              <p className='text-xs lg:text-sm'>thesudeshdas.com</p>
            </a>

            <a
              href='mailto:sudeshkumardas7@gmail.com'
              className='flex w-fit gap-2 items-center'
            >
              <FiMail className='h-4 w-4' />

              <p className='text-xs lg:text-sm'>{userDetails?.email}</p>
            </a>
          </div>

          <div className='grid grid-cols-2 gap-1'>
            <button className='btn btn-square btn-ghost btn-sm hover:bg-inherit group'>
              <FiGithub className='h-5 w-5 text-base-content group-hover:text-primary transition-colors' />
            </button>

            <button className='btn btn-square btn-ghost btn-sm hover:bg-inherit group'>
              <FiGitlab className='h-5 w-5 text-base-content group-hover:text-primary transition-colors' />
            </button>

            <button className='btn btn-square btn-ghost btn-sm hover:bg-inherit group'>
              <FiLinkedin className='h-5 w-5 text-base-content group-hover:text-primary transition-colors' />
            </button>

            <button className='btn btn-square btn-ghost btn-sm hover:bg-inherit group'>
              <FiTwitter className='h-5 w-5 text-base-content group-hover:text-primary transition-colors' />
            </button>
          </div>
        </div>

        <div className='flex gap-3 flex-wrap'>
          <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-3 w-3 object-contain'
            />
            ReactJS
          </div>
          <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-3 w-3 object-contain'
            />
            ReactJS
          </div>
          <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-3 w-3 object-contain'
            />
            ReactJS
          </div>
          <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-3 w-3 object-contain'
            />
            ReactJS
          </div>
          <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-3 w-3 object-contain'
            />
            ReactJS
          </div>
          <div className='badge badge-outline h-fit px-1.5 flex gap-1.5 textarea-bordered text-xxs'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-3 w-3 object-contain'
            />
            ReactJS
          </div>
        </div>

        <div
          role='tablist'
          className='tabs tabs-bordered'
        >
          <input
            type='radio'
            name='profile_tabs'
            role='tab'
            className='tab'
            aria-label='Portfolio'
            checked={profileTab === 'portfolio'}
            onChange={() => handleProfileTabChange('portfolio')}
          />
          <PortfolioTab />

          <input
            type='radio'
            name='profile_tabs'
            role='tab'
            className='tab'
            aria-label='Projects'
            checked={profileTab === 'projects'}
            onChange={() => handleProfileTabChange('projects')}
          />
          <ProjectsTab />

          <input
            type='radio'
            name='profile_tabs'
            role='tab'
            className='tab'
            aria-label='Blogs'
            checked={profileTab === 'blogs'}
            onChange={() => handleProfileTabChange('blogs')}
          />
          <BlogsTab />

          <input
            type='radio'
            name='profile_tabs'
            role='tab'
            className='tab'
            aria-label='Work'
            checked={profileTab === 'work'}
            onChange={() => handleProfileTabChange('work')}
          />
          <WorkTab />

          <input
            type='radio'
            name='profile_tabs'
            role='tab'
            className='tab'
            aria-label='About'
            checked={profileTab === 'about'}
            onChange={() => handleProfileTabChange('about')}
          />
          <AboutTab />
        </div>
      </div>

      <div className='hidden lg:block !w-1/4 min-w-[250px]'>
        <ProfileEditor />
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
