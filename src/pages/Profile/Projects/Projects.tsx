import Powst from '../../../components/Powst/Powst';
import useAuthContext from '../../../contexts/AuthContext/authContext.hook';
import useShowPowst from '../../../hooks/useShowPowst/useShowPowst';
import { useGetAllUserPowsts } from '../../../queries/getAllUserPowsts/useGetAllUserPowsts.hook';

import ProjectsSkeleton from './ProjectsSkeleton';

export default function ProjectsTab() {
  const { authState } = useAuthContext();
  const { setPowstToBeShown } = useShowPowst();

  const { data, isPending } = useGetAllUserPowsts({ userId: authState.userId });

  if (isPending) {
    return <ProjectsSkeleton />;
  }

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {data?.map((item) => (
            <Powst
              powstDetails={item.powst}
              setPowstToBeShown={setPowstToBeShown}
              key={item.powst._id}
              sameUser
            />
          ))}
        </div>
      </article>
    </div>
  );
}
