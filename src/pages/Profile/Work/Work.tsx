import { LuPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import WorkTimelineCard from '../../../components/work/WorkTimelineCard/WorkTimelineCard';
import { useGetAllUserWorks } from '../../../queries/getAllUserWorks/useGetAllUserWorks.hook';

export default function WorkTab({ username }: { username: string }) {
  const { data: workData } = useGetAllUserWorks({ userId: username });

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4'>
        <Link
          to='/edit-profile?form=work-new'
          className='border input-bordered p-4 font-medium pr-4 bg-base-300 flex items-center justify-center rounded-md cursor-pointer'
        >
          <LuPlus className='w-16 h-16' />

          <p className='text-sm'>Add a new work experience</p>
        </Link>

        <ul className='timeline timeline-vertical timeline-snap-icon'>
          {workData?.map((work) => (
            <WorkTimelineCard
              key={work.work?._id}
              workDetails={work?.work}
            />
          ))}
        </ul>
      </article>
    </div>
  );
}
