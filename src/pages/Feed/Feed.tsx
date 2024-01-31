// import components
import Powst from '../../components/Powst/Powst';
import PowstDetailsModal from '../../components/Powst/PowstDetailsModal/PowstDetailsModal';
import PowstSkeleton from '../../components/Powst/PowstSkeleton';

// import queries
import { useGetAllPowsts } from '../../queries/useGetAllPowsts.hook';

export default function Feed() {
  const { isLoading } = useGetAllPowsts();

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
          <>
            <Powst />
            <Powst />
            <Powst />
          </>
        )}

        <PowstDetailsModal />
      </div>
    </main>
  );
}
