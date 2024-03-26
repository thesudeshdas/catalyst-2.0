import { LuMoveRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

export default function Home() {
  return (
    <main className='grid place-items-center h-screen w-screen px-20'>
      <div className='flex flex-col gap-4 items-start justify-center w-full max-w-4xl'>
        <h1 className='font-extrabold text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight font-small-caps'>
          Use
          <br />
          Catalyst
        </h1>

        <p className='text-md md:text-lg lg:text-xl xl:text-2xl pl-1 lg:pl-2 flex items-center gap-2'>
          Seriously! Just try it. <ThemeToggle />
        </p>

        <Link to='/feed'>
          <button className='btn btn-neutral btn-outline ml-1 lg:ml-2'>
            Let's Goo
            <LuMoveRight />
          </button>
        </Link>
      </div>
    </main>
  );
}
