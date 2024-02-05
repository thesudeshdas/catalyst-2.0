// import components
import { useState } from 'react';
import Powst from '../../components/Powst/Powst';
import PowstDetailsModal from '../../components/Powst/PowstDetailsModal/PowstDetailsModal';
import PowstSkeleton from '../../components/Powst/PowstSkeleton';

// import queries
import { useGetAllPowsts } from '../../queries/getAllPowsts/useGetAllPowsts.hook';

export default function Feed() {
  const { isLoading, data } = useGetAllPowsts();

  const [powstToBeShown, setPowstToBeShown] = useState<string>('');

  console.log({ powstToBeShown });

  return (
    <main className='flex flex-col'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {isLoading ? (
          <>
            <PowstSkeleton />
            <PowstSkeleton />
            <PowstSkeleton />
          </>
        ) : (
          data?.map((powst) => (
            <Powst
              powstDetails={powst}
              setPowstToBeShown={setPowstToBeShown}
              key={powst._id}
            />
          ))
        )}

        <PowstDetailsModal
          powstToBeShown={powstToBeShown}
          setPowstToBeShown={setPowstToBeShown}
        />
      </div>
    </main>
  );
}
