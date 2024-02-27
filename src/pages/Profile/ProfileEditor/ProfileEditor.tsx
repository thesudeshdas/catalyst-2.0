import { Dispatch, SetStateAction } from 'react';

import { profileEditorOptions } from './profileEditor.data';

interface IProfileEditorProps {
  alwaysOpen?: boolean;
  activeProfile?: string;
  setActiveProfile?: Dispatch<SetStateAction<string>>;
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
              option.nameId === activeProfile
                ? 'border-primary text-primary font-bold transition-all'
                : ''
            } `}
            key={option.nameId}
          >
            <button
              className='w-full p-4'
              onClick={() => {
                if (setActiveProfile) {
                  setActiveProfile(option.nameId as string);
                }
              }}
            >
              {option.heading}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
