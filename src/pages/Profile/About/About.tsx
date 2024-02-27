import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

import useAuthContext from '../../../contexts/AuthContext/authContext.hook';
import useGetUserDetails from '../../../queries/getUserDetails/useGetUserDetails';

export default function AboutTab() {
  const { authState } = useAuthContext();

  const { data: userDetails } = useGetUserDetails({ userId: authState.userId });

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='flex flex-col sm:flex-row justify-between gap-8'>
          <p className='text-sm lg:text-base sm:max-w-[600px]'>
            {userDetails?.description}
          </p>

          <section className='flex-shrink-0 flex flex-col sm:items-end'>
            <h4 className='font-semibold text-xl mb-2'>Connect with me</h4>

            <ul className='sm:flex sm:flex-col grid grid-cols-2 gap-2 sm:items-end'>
              <li className='flex sm:flex-row-reverse gap-2 items-center text-sm lg:text-base'>
                <SiGithub />
                thesudeshdassdfsd
              </li>

              <li className='flex sm:flex-row-reverse gap-2 items-center text-sm lg:text-base'>
                <SiLinkedin />
                thesudeshdassdfsdf d
              </li>

              <li className='flex sm:flex-row-reverse gap-2 items-center text-sm lg:text-base'>
                <SiInstagram />
                thesudeshdasfsdfdsf
              </li>

              <li className='flex sm:flex-row-reverse gap-2 items-center text-sm lg:text-base'>
                <SiTwitter />
                thesudeshdas
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
