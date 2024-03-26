import { profileEditorOptions } from './profileEditor.data';

interface IProfileEditorProps {
  alwaysOpen?: boolean;
  activeProfile: string;
  setActiveProfile: (formName: string) => void;
}

export default function ProfileEditor({
  alwaysOpen = false,
  activeProfile,
  setActiveProfile
}: IProfileEditorProps) {
  return (
    <div
      tabIndex={0}
      className={`collapse ${
        alwaysOpen ? 'collapse-open' : 'collapse-arrow'
      } flex-shrink-0 border textarea-bordered rounded-md bg-base-100`}
    >
      <input type='checkbox' />

      <div className='collapse-title text-lg font-medium'>Profile Editor</div>

      <ul className='collapse-content grid grid-cols-2 gap-2 w-full'>
        {profileEditorOptions?.map((option) => (
          <li
            className={`border-2 textarea-bordered rounded-md grid place-items-center text-center ${
              activeProfile.includes(option.heading.toLowerCase())
                ? 'border-primary text-primary font-bold transition-all'
                : ''
            } `}
            key={option.nameId}
          >
            <button
              className='w-full p-4'
              onClick={() => setActiveProfile(option.heading.toLowerCase())}
            >
              {option.heading}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
