export default function PortfolioSkeleton() {
  return (
    <div className='tab-content !grid sm:grid grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
      <div className='skeleton aspect-[4/3] w-full'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
    </div>
  );
}
