// import rrd
import { Link } from 'react-router-dom';

// import icons
import { FiChevronLeft } from 'react-icons/fi';

// import components
import ThemeToggle from '../../ThemeToggle/ThemeToggle';

export default function CreateTopNav() {
  return (
    <nav className='pr-2 md:p-2 lg:p-4 flex items-center gap-2 sticky top-0 z-10 bg-base-100 h-14 border-b-2 border-base-300'>
      <Link
        to='/feed'
        className='flex items-center flex-grow'
      >
        <FiChevronLeft className='h-6 w-6 md:h-7 md:w-7 z-10' />

        <p className='text-xs font-semibold'>Take me back</p>
      </Link>

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
