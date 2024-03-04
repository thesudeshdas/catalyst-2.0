export default function ProfileSkeleton() {
  return (
    <main className='flex gap-6 items-start flex-grow w-full overflow-hidden max-h-[83vh] '>
      <div className='flex flex-col gap-6 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <div className='skeleton w-20 h-20 mask mask-squircle '></div>

            <div>
              <div className='skeleton h-12 w-48 mb-2'></div>
              <div className='skeleton h-6 w-48'></div>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <ul className='flex flex-col gap-4'>
            <li className='skeleton h-6 w-36 sm:w-48 md:w-56'></li>
            <li className='skeleton h-6 w-36 sm:w-48 md:w-56'></li>
            <li className='skeleton h-6 w-36 sm:w-48 md:w-56'></li>
            <li className='skeleton h-6 w-36 sm:w-48 md:w-56'></li>
          </ul>

          <ul className='grid grid-cols-2 gap-2'>
            <li className='skeleton h-8 w-8'></li>
            <li className='skeleton h-8 w-8'></li>
            <li className='skeleton h-8 w-8'></li>
            <li className='skeleton h-8 w-8'></li>
          </ul>
        </div>

        <ul className='flex gap-3 flex-wrap'>
          <li className='skeleton h-6 w-20'></li>
          <li className='skeleton h-6 w-20'></li>
          <li className='skeleton h-6 w-20'></li>
          <li className='skeleton h-6 w-20'></li>
        </ul>

        <div className='skeleton h-1 w-full'></div>

        <ul className='flex gap-4 w-full justify-between'>
          <li className='skeleton aspect-[4/3] w-full'></li>
          <li className='skeleton aspect-[4/3] w-full hidden sm:block'></li>
          <li className='skeleton aspect-[4/3] w-full hidden md:block'></li>
          <li className='skeleton aspect-[4/3] w-full hidden md:block'></li>
        </ul>

        <div className='skeleton h-1 w-full'></div>

        <ul className='flex gap-4 w-full justify-between'>
          <li className='skeleton aspect-[4/3] w-full'></li>
          <li className='skeleton aspect-[4/3] w-full hidden sm:block'></li>
          <li className='skeleton aspect-[4/3] w-full hidden md:block'></li>
        </ul>
      </div>

      <div className='hidden lg:block skeleton !w-1/4 min-w-[250px] h-[150px]'></div>
    </main>
  );
}
