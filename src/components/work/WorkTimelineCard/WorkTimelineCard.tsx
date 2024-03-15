import { LuExternalLink, LuMapPin, LuTimer } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { IWork } from '../../../types/workTypes/work.types';
import { getDateDifference } from '../../../utils/date/dateDifference/dateDifference';
import { formatDate } from '../../../utils/date/formatDate/formatDate';
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';

interface IWorkTimelineCardProps {
  workDetails?: Partial<IWork>;
}

export default function WorkTimelineCard({
  workDetails
}: IWorkTimelineCardProps) {
  const {
    description,
    keywords,
    company,
    companyLogo,
    designation,
    endDate,
    startDate,
    techStack,
    companyWebsite,
    location,
    workType
  } = workDetails || {};

  return (
    <li className='grid-cols-timeline sm:grid-cols-timeline-sm overflow-auto no-scrollbar '>
      <div className='timeline-start text-right h-full pt-2 lg:pt-1 text-xs lg:text-sm text-zinc-500 hidden sm:block'>
        {endDate?.year === 'Present'
          ? 'Present'
          : endDate
            ? formatDate(endDate)
            : ''}
        <br className='block' /> - {startDate ? formatDate(startDate) : ''}
      </div>

      <div className='timeline-middle px-2'>
        {company && companyLogo && (
          <UserAvatar
            name={company}
            src={companyLogo}
            username={company}
            size='md'
            noRedirect
          />
        )}
      </div>

      <div className='timeline-end !justify-self-stretch'>
        <div className='timeline-start pt-2 text-xs text-zinc-500 sm:hidden mb-4'>
          {startDate?.month} {startDate?.year}-{' '}
          {endDate?.year === 'Present'
            ? 'Present'
            : `${endDate?.month} ${endDate?.year}`}
        </div>

        <div className='collapse border textarea-bordered'>
          <input type='checkbox' />

          <div className='collapse-title font-medium pr-4 flex gap-3'>
            <div>
              <h4 className='text-sm lg:text-md font-normal flex gap-2 items-center'>
                {company}
              </h4>

              <h5 className='font-semibold lg:text-xl'>{designation}</h5>
            </div>

            <p className='ml-auto text-xs lg:text-md text-right text-zinc-500'>
              {startDate && endDate && getDateDifference(startDate, endDate)}
            </p>
          </div>

          <div className='collapse-content border-t-2'>
            <div className='my-4 flex gap-3'>
              <div className='badge badge-primary p-4'>
                <LuMapPin className='mr-1' /> {location}
              </div>

              <div className='badge badge-primary p-4'>
                <LuTimer className='mr-1' /> {workType}
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-start'>
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
                {techStack?.map((tech) => (
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-${tech.version}.svg`}
                    className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
                  />
                ))}
              </ul>
            </div>

            <div className='flex flex-col lg:flex-row items-start my-4 sm:my-6 lg:mt-0'>
              {keywords && keywords?.length > 0 && (
                <ul className='flex flex-wrap gap-3 w-full '>
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

              <a
                href={companyWebsite}
                target='_blank'
                className='text-sm lg:text-md font-normal underline underline-offset-4 flex gap-2 items-center flex-shrink-0 mt-4 sm:mt-6 lg:mt-0'
              >
                {company} <LuExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </li>
  );
}
