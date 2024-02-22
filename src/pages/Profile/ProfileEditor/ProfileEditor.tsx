import EditProfileModal from '../../../components/modals/EditProfileModal/EditProfileModal';

import { profileEditorOptions } from './profileEditor.data';

interface IProfileEditorProps {
  alwaysOpen?: boolean;
}

export default function ProfileEditor({
  alwaysOpen = false
}: IProfileEditorProps) {
  return (
    <div
      tabIndex={0}
      className={`collapse  ${
        alwaysOpen ? 'collapse-open' : 'collapse-arrow'
      } flex-shrink-0 border textarea-bordered rounded-md`}
    >
      <input type='checkbox' />

      <div className='collapse-title text-lg font-medium'>Profile Editor</div>

      <ul className='collapse-content grid grid-cols-2 gap-2 w-full'>
        {profileEditorOptions?.map((option) => (
          <li
            className='border textarea-bordered rounded-md grid place-items-center text-center'
            key={option.nameId}
          >
            <EditProfileModal
              heading={option.heading}
              nameId={option.nameId}
              form={option.form}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
