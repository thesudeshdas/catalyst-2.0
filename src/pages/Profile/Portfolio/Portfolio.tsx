import BlogPowst from '../../../components/BlogPowst/BlogPowst';
import Powst from '../../../components/Powst/Powst';
import useShowPowst from '../../../hooks/useShowPowst/useShowPowst';
import useGetUserDetails from '../../../queries/getUserDetails/useGetUserDetails';

import PortfolioSkeleton from './PortfolioSkeleton';

export default function PortfolioTab({ userName }: { userName: string }) {
  const { setPowstToBeShown } = useShowPowst();

  const { data: userDetails, isPending: isUserDetailsPending } =
    useGetUserDetails({ userId: userName });

  if (isUserDetailsPending) {
    return <PortfolioSkeleton />;
  }

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-8'>
        <div className='flex flex-col sm:flex-row gap-4 items-start justify-between'>
          <p className='text-sm lg:text-base sm:max-w-[600px]'>
            {userDetails?.bio}
          </p>

          <div className='flex flex-wrap gap-3 w-full sm:w-fit sm:grid grid-cols-6 flex-shrink-0'>
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
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 lg:h-8 lg:w-8 object-contain'
            />
          </div>
        </div>

        <div>
          <h4 className='font-semibold text-xl mb-2'>Featured Projects</h4>

          <article className='relative overflow-auto h-72 sm:h-fit'>
            <div className='absolute sm:static flex sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {userDetails?.powsts?.map((item) => (
                <div
                  className='w-72 sm:w-auto'
                  key={item.powst._id}
                >
                  <Powst
                    powstDetails={item.powst}
                    setPowstToBeShown={setPowstToBeShown}
                    key={item.powst._id}
                    sameUser
                  />
                </div>
              ))}
            </div>
          </article>
        </div>

        <div>
          <h4 className='font-semibold text-xl mb-2'>Featured Blogs</h4>

          <div className='relative overflow-auto h-52 sm:h-fit'>
            <ul className='absolute sm:static flex sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {userDetails?.blogs?.slice(0, 4)?.map((item) => (
                <li className='w-72 sm:w-auto'>
                  <BlogPowst
                    sameUser
                    blogDetails={item.blog}
                    key={item.blog._id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
