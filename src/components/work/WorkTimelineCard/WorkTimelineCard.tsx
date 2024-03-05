import { LuExternalLink } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { IWork } from '../../../types/workTypes/work.types';
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';

interface IWorkTimelineCardProps {
  workDetails?: Partial<IWork>;
}

export default function WorkTimelineCard({
  workDetails
}: IWorkTimelineCardProps) {
  const { description, keywords } = workDetails || {};

  return (
    <li className='grid-cols-timeline sm:grid-cols-timeline-sm overflow-auto no-scrollbar '>
      <div className='timeline-start text-right h-full pt-2 lg:pt-1 text-xs lg:text-sm text-zinc-500 hidden sm:block'>
        Present <br className='block' /> - Dec 2023
      </div>

      <div className='timeline-middle px-2'>
        <UserAvatar
          name='TalentPlace.ai'
          src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
          username='@talentplace'
          size='md'
        />
      </div>

      <div className='timeline-end !justify-self-stretch'>
        <div className='timeline-start pt-2 text-xs text-zinc-500 sm:hidden mb-4'>
          Dec 2023 - Present
        </div>

        <div className='collapse border textarea-bordered'>
          <input type='checkbox' />

          <div className='collapse-title font-medium pr-4 flex gap-3'>
            <div>
              <h4 className='text-sm lg:text-md font-normal flex gap-2 items-center'>
                TalentPlace.ai <LuExternalLink />
              </h4>

              <h5 className='font-semibold lg:text-xl'>Frontend Developer</h5>
            </div>

            <p className='ml-auto text-xs lg:text-md text-right text-zinc-500'>
              1y, 1m
            </p>
          </div>

          <div className='collapse-content border-t-2'>
            <div className='flex flex-col lg:flex-row items-start mt-4'>
              {description && (
                <div className='w-full overflow-auto no-scrollbar mb-6'>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className='mdx_editor'
                  >
                    {description?.replace(/&#x20;&#x20;/g, '<br />')}
                  </ReactMarkdown>
                </div>
              )}

              <ul className='flex flex-wrap gap-3 w-full lg:max-w-[250px] lg:justify-end'>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
                  className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
                />

                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
                  className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
                />

                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
                  className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
                />

                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
                  className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
                />

                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
                  className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
                />
              </ul>
            </div>

            {keywords && keywords?.length > 0 && (
              <ul className='flex flex-wrap gap-3 w-full sm:mt-6 lg:mt-0'>
                {keywords?.map((pill, index) => (
                  <div
                    key={`pill_${index}_${pill}`}
                    className='badge cursor-pointer badge-outline'
                  >
                    {pill}
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <hr />
    </li>
  );
}
