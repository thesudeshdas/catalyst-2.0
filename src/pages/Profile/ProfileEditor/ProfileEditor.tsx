// import components
import EditProfileModal from '../../../components/modals/EditProfileModal/EditProfileModal';

// import data
import { profileEditorOptions } from './profileEditor.data';

export default function ProfileEditor() {
  return (
    <details className='collapse collapse-arrow hidden lg:flex !w-1/4 flex-shrink-0 border textarea-bordered  rounded-md '>
      <summary className='collapse-title text-lg font-medium'>
        Profile Editor
      </summary>

      <ul className='collapse-content grid grid-cols-2 gap-2 w-full'>
        {profileEditorOptions?.map((option) => (
          <li className='border textarea-bordered rounded-md grid place-items-center text-center'>
            <EditProfileModal
              heading={option.heading}
              nameId={option.nameId}
              form={option.form}
            />
          </li>
        ))}
      </ul>
    </details>
  );
}
