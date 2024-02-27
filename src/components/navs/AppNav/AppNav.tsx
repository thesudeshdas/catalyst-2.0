import { LuBriefcase, LuCompass, LuPlusSquare, LuSearch } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import AppSideNav from '../AppSideNav/AppSideNav';

export default function AppNav() {
  return (
    <nav className='pr-2 md:p-2 lg:p-4 flex items-center gap-2 sticky top-0 z-50 bg-base-100'>
      <AppSideNav />

      <div className='hidden lg:flex items-center gap-2'>
        <Link
          to='/feed'
          className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[7.5rem] transition-all '
        >
          <LuCompass className='h-5 w-5 md:h-6 md:w-6 z-10 bg-base-100 absolute top-0 left-0' />

          <p className='absolute left-8'>Inspiration</p>
        </Link>

        <Link
          to='/profile'
          className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[6.5rem] transition-all '
        >
          <LuBriefcase className='h-5 w-5 md:h-6 md:w-6 z-10 bg-base-100 absolute top-0 left-0' />

          <p className='absolute left-8'>Portfolio</p>
        </Link>

        <Link
          to='/create/basic'
          className='flex items-center gap-2 relative overflow-hidden h-[1.5rem] md:h-[1.75rem] w-[1.5rem] md:w-[1.75rem] hover:w-[5.5rem] transition-all '
        >
          <LuPlusSquare className='h-5 w-5 md:h-6 md:w-6 z-10 bg-base-100 absolute top-0 left-0' />

          <p className='absolute left-8'>Create</p>
        </Link>
      </div>

      <LuSearch className='h-5 w-5 md:h-6 md:w-6 ml-auto' />

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
