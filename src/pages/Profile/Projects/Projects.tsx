// import hooks
import useAuthContext from '../../../contexts/AuthContext/authContext.hook';
import useShowPowst from '../../../hooks/useShowPowst/useShowPowst';

// import components
import Powst from '../../../components/Powst/Powst';
import PowstSkeleton from '../../../components/Powst/PowstSkeleton';

// import queries
import { useGetAllUserPowsts } from '../../../queries/getAllUserPowsts/useGetAllUserPowsts.hook';

export default function ProjectsTab() {
  const { authState } = useAuthContext();
  const { setPowstToBeShown } = useShowPowst();

  const { data, isLoading } = useGetAllUserPowsts({ userId: authState.userId });

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
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
                sameUser
              />
            ))
          )}
        </div>
      </article>
    </div>
  );
}
