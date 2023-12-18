// import rrd
import { Link } from 'react-router-dom';

// import icons
import {
  TbBriefcase,
  TbBulb,
  TbPlus,
  TbSearch,
  TbMenu2,
  TbBrandGithub,
  TbBrandLinkedin
} from 'react-icons/tb';

// import components
import ThemeToggle from '../../ThemeToggle/ThemeToggle';

export default function AppNav() {
  return (
    <nav className='pr-2 md:p-2 lg:p-4 flex items-center gap-2 '>
      <input
        id='mobile-sidebar'
        type='checkbox'
        className='drawer-toggle'
      />

      <div className='flex-none md:hidden'>
        <label
          htmlFor='mobile-sidebar'
          aria-label='open sidebar'
          className='btn btn-square btn-ghost'
        >
          <TbMenu2 className='h-6 w-6' />
        </label>
      </div>

      <div className='drawer-side z-20'>
        <label
          htmlFor='mobile-sidebar'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>

        <div className='p-4 w-80 min-h-full bg-base-200 flex flex-col'>
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

          <ul className='menu gap-2 p-0 flex-grow'>
            <li>
              <Link
                to='/feed'
                className='p-0 flex items-center gap-2'
              >
                <TbBulb className='h-6 w-6' />

                <p>Inspiration</p>
              </Link>
            </li>

            <li>
              <Link
                to='/portfolio'
                className='p-0 flex items-center gap-2'
              >
                <TbBriefcase className='h-6 w-6' />

                <p>Portfolio</p>
              </Link>
            </li>

            <li>
              <Link
                to='/create'
                className='p-0 flex items-center gap-2'
              >
                <TbPlus className='h-6 w-6' />

                <p>Create</p>
              </Link>
            </li>
          </ul>

          <div className='divider' />

          <ul className='flex gap-2'>
            <li>
              <a
                href='https://github.com/thesudeshdas'
                target='_blank'
                rel='noreferrer'
              >
                <TbBrandGithub className='h-6 w-6' />
              </a>
            </li>

            <li>
              <a
                href='https://www.linkedin.com/in/thesudeshdas'
                target='_blank'
                rel='noreferrer'
              >
                <TbBrandLinkedin className='h-6 w-6' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='hidden md:flex items-center gap-2'>
        <Link
          to='/feed'
          className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[7.5rem] transition-all '
        >
          <TbBulb className='h-6 w-6 md:h-7 md:w-7 z-10 bg-base-100 absolute top-0 left-0' />

          <p className='absolute left-8'>Inspiration</p>
        </Link>

        <Link
          to='/portfolio'
          className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[6.5rem] transition-all '
        >
          <TbBriefcase className='h-6 w-6 md:h-7 md:w-7 z-10 bg-base-100 absolute top-0 left-0' />

          <p className='absolute left-8'>Portfolio</p>
        </Link>

        <Link
          to='/create'
          className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[5.5rem] transition-all '
        >
          <TbPlus className='h-6 w-6 md:h-7 md:w-7 z-10 bg-base-100 absolute top-0 left-0' />

          <p className='absolute left-8'>Create</p>
        </Link>
      </div>

      <TbSearch className='h-6 w-6 md:h-7 md:w-7 ml-auto' />

      <ThemeToggle />

      <Link
        to='/'
        className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[6.5rem] transition-all'
      >
        <img
          src='/icons/brand/catalystShort.svg'
          className='h-6 w-6 md:h-7 md:w-7 z-10 absolute top-0 left-0 dark:invert'
        />

        <p className='absolute left-8'>Catalyst</p>
      </Link>
    </nav>
  );
}
