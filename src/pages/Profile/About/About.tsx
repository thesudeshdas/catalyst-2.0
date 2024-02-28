import { FiInfo } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import socialIconsList from '../../../assets/icons/socialIcons';
import useAuthContext from '../../../contexts/AuthContext/authContext.hook';
import useGetUserDetails from '../../../queries/getUserDetails/useGetUserDetails';

export default function AboutTab() {
  const { authState } = useAuthContext();

  const { data: userDetails } = useGetUserDetails({ userId: authState.userId });

  const renderedSocialIcons = userDetails?.socials
    ?.filter((social) => social.name !== 'portfolio')
    .map(({ name, link }) => {
      const { icon: Icon } = socialIconsList.find(
        (item) => item.name === name
      ) || { icon: FiInfo };

      return (
        <li key={name}>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:bg-inherit group hover:text-primary flex sm:flex-row-reverse gap-2 items-center text-sm lg:text-base font-normal'
          >
            <Icon className='h-5 w-5 text-base-content group-hover:text-primary transition-colors' />

            {link}
          </a>
        </li>
      );
    });

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4 '
    >
      <article className='flex flex-col sm:flex-row justify-between gap-8'>
        <div className='w-full sm:max-w-[1000px] sm:max-h-[calc(100vh-13rem)] overflow-auto no-scrollbar'>
          <div className='mdx_editor'>
            <ReactMarkdown children={userDetails?.description} />
          </div>
        </div>

        <div className='flex-shrink-0 flex-grow-0 sticky top-0 sm:w-[250px]'>
          <section className='flex flex-col sm:items-end'>
            <h4 className='font-semibold text-xl mb-2'>Connect with me</h4>

            <ul className='sm:flex sm:flex-col grid grid-cols-2 gap-3 sm:items-end'>
              {renderedSocialIcons}
            </ul>
          </section>

          <section className='flex flex-col sm:items-end mt-4'>
            <h4 className='font-semibold text-xl mb-2'>Specialisation</h4>

            <ul className='flex flex-wrap sm:justify-end gap-3  w-full'>
              {userDetails?.specialisation?.map((pill, index) => (
                <div
                  key={`pill_${index}_${pill}`}
                  className='badge cursor-pointer badge-outline'
                >
                  {pill}
                </div>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
