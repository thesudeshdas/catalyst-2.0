// import components
import Powst from '../../../components/Powst/Powst';

export default function PortfolioTab() {
  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='flex flex-col sm:flex-row gap-4 items-start justify-between'>
          <p className='text-sm lg:text-base sm:max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            beatae ipsa animi illo, aut ratione qui id possimus quae ipsam est
            tempora reprehenderit excepturi quidem eaque quod inventore! Ut,
            animi.
          </p>

          <div className='flex flex-wrap gap-3 w-full sm:w-52 flex-shrink-0'>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 object-contain'
            />

            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 object-contain'
            />

            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 object-contain'
            />
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 object-contain'
            />
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 object-contain'
            />
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`}
              className='h-6 w-6 object-contain'
            />
          </div>
        </div>

        <div>
          <h4 className='font-medium text-lg mb-2'>Featured Projects</h4>

          <div className='relative overflow-auto h-52 sm:h-fit'>
            <div className='absolute sm:static flex sm:grid grid-cols-3 gap-4 sm:gap-6'>
              <div className='w-52 sm:w-auto'>
                <Powst sameUser />
              </div>
              <div className='w-52 sm:w-auto'>
                <Powst sameUser />
              </div>
              <div className='w-52 sm:w-auto'>
                <Powst sameUser />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className='font-medium text-lg mb-2'>Featured Blogs</h4>

          <div className='relative overflow-auto h-52 sm:h-fit'>
            <div className='absolute sm:static flex sm:grid grid-cols-3 gap-4 sm:gap-6'>
              <div className='w-52 sm:w-auto'>
                <Powst sameUser />
              </div>
              <div className='w-52 sm:w-auto'>
                <Powst sameUser />
              </div>
              <div className='w-52 sm:w-auto'>
                <Powst sameUser />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
