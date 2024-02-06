// import components
import BasicModal from '../../../components/modals/editProfileModals/BasicModal/BasicModal';

export default function ProfileEditor() {
  return (
    <details className='collapse collapse-arrow hidden lg:flex !w-1/4 flex-shrink-0 border textarea-bordered  rounded-md '>
      <summary className='collapse-title text-lg font-medium'>
        Profile Editor
      </summary>

      <ul className='collapse-content grid grid-cols-2 gap-2 w-full'>
        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          <BasicModal />
        </li>

        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          Socials
        </li>

        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          Projects
        </li>

        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          Blogs
        </li>

        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          Work
        </li>

        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          About
        </li>

        <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
          Contact
        </li>
      </ul>
    </details>
  );
}
