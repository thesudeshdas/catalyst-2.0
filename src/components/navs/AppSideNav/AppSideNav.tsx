// import rrd
import { Link } from 'react-router-dom';

// import icons
import { LuMenu } from 'react-icons/lu';

// import data
import { appSideNavLinks } from './appSideNav.data';
import { socialsList } from '../../../data/socials/socials.data';

export default function AppSideNav() {
  return (
    <>
      <input
        id='mobile-sidebar'
        type='checkbox'
        className='drawer-toggle'
      />

      <div className='flex-none lg:hidden'>
        <label
          htmlFor='mobile-sidebar'
          aria-label='open sidebar'
          className='btn btn-square btn-ghost'
        >
          <LuMenu className='h-6 w-6' />
        </label>
      </div>

      <div className='drawer-side z-20 lg:hidden'>
        <label
          htmlFor='mobile-sidebar'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>

        <div className='p-4 w-60 min-h-full bg-base-200 flex flex-col'>
          <Link
            to='/'
            className='p-0 flex items-center gap-2'
          >
            <img
              src='/icons/brand/catalystShort.svg'
              className='h-8 w-8 dark:invert'
            />

            <p className='text-lg'>Catalyst</p>
          </Link>

          <div className='divider' />

          {/* static redirection links */}
          <ul className='menu gap-2 p-0 flex-grow'>
            {appSideNavLinks?.map((link) => (
              <li key={link.text}>
                <Link
                  to={link.link}
                  className='p-0 flex items-center gap-2'
                >
                  {<link.icon className='h-5 w-5' />}

                  <p>{link.text}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className='divider' />

          {/* socials */}
          <ul className='flex gap-2'>
            {socialsList?.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <social.icon className='h-5 w-5' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
