export default function PortfolioSkeleton() {
  return (
    <div className='tab-content !grid grid-cols-1 sm:grid-cols-3 gap-4 py-4'>
      <div className='skeleton aspect-[4/3] w-full'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
      <div className='skeleton aspect-[4/3] w-full hidden sm:block'></div>
    </div>
  );
}
