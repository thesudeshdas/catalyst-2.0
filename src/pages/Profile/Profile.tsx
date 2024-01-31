// import react
import { useState } from 'react';

// import icons
import {
  FiCheck,
  FiGithub,
  FiGitlab,
  FiLink,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTwitter
} from 'react-icons/fi';

// import components
import UserAvatar from '../../components/avatars/UserAvatar/UserAvatar';
import PortfolioTab from './Portfolio/Portfolio';
import ProjectsTab from './Projects/Projects';
import BlogsTab from './Blogs/Blogs';

export default function Profile() {
  const [profileTab, setProfileTab] = useState<string>('projects');

  const handleProfileTabChange = (tab: string) => {
    setProfileTab(tab);
  };

  return (
    <main className='flex gap-6'>
      <div className='flex flex-col gap-6 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <UserAvatar
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              name='Sudesh Das'
              variant='avatar'
              size='2xl'
            />

            <div>
              <h2 className='font-semibold text-3xl lg:text-4xl'>Sudesh Das</h2>

              <h3>Fullstack Developer</h3>
            </div>
          </div>

          {/* <button className='btn btn-sm btn-primary'>Follow</button> */}

          <button className='btn btn-square btn-sm btn-primary btn-outline'>
            <FiCheck />
          </button>
        </div>

        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-2'>
            <div className='flex w-fit gap-2 items-center'>
              <FiMapPin className='h-4 w-4' />

              <p className='text-xs lg:text-sm'>Bangalore, India</p>
            </div>

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

              <p className='text-xs lg:text-sm'>sudeshkumardas7@gmail.com</p>
            </a>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <FiGithub className='h-5 w-5 text-base-content' />
            <FiGitlab className='h-5 w-5 text-base-content' />
            <FiLinkedin className='h-5 w-5 text-base-content' />
            <FiTwitter className='h-5 w-5 text-base-content' />
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
            className='tab w-full'
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
        </div>
      </div>

      <div className='hidden lg:flex h-32 w-1/4 flex-shrink-0 border rounded-md input-bordered'></div>
    </main>
  );
}

// IDEA @thesudeshdas => Show analytics on the bottom right like number of followers gained, powst engagement, etc
