import { LuPlus } from 'react-icons/lu';

import WorkTimelineCard from '../../../components/work/WorkTimelineCard/WorkTimelineCard';
import useGetUserDetails from '../../../queries/getUserDetails/useGetUserDetails';

export default function WorkTab({ username }: { username: string }) {
  const { data: userDetails } = useGetUserDetails({ userId: username });

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='border input-bordered p-4 font-medium pr-4 bg-base-300 flex items-center justify-center rounded-md cursor-pointer'>
          <LuPlus className='w-16 h-16' />

          <p className='text-sm'>Add a new work experience</p>
        </div>

        <ul className='timeline timeline-vertical timeline-snap-icon'>
          <WorkTimelineCard
            workDetails={{
              description: userDetails?.description,
              keywords: ['react']
            }}
          />
        </ul>
      </article>
    </div>
  );
}
