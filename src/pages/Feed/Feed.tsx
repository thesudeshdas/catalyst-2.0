// import components
import Powst from '../../components/Powst/Powst';
import PowstSkeleton from '../../components/Powst/PowstSkeleton';

// import queries
import { useGetAllPowsts } from '../../queries/getAllPowsts/useGetAllPowsts.hook';
import useShowPowst from '../../hooks/useShowPowst/useShowPowst';

export default function Feed() {
  const { isPending, data } = useGetAllPowsts();

  const { setPowstToBeShown } = useShowPowst();

  return (
    <main className='flex flex-col flex-grow w-full'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {isPending ? (
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
      </div>
    </main>
  );
}
