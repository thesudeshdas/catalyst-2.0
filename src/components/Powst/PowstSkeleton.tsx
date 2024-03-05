export default function PowstSkeleton() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <div className='skeleton h-8 w-8'></div>

        <div className='skeleton h-6 w-24'></div>
      </div>

      <div className='skeleton aspect-[4/3] relative group overflow-hidden'></div>

      <div className='flex justify-between items-start gap-6'>
        <div className='skeleton h-6 w-48'></div>

        <div className='skeleton h-6 w-6'></div>
      </div>
    </div>
  );
}
