import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState
} from 'react';
import { LuInfo } from 'react-icons/lu';

interface IPillsInputProps {
  pillsFromForm: string[];
  setPillsInForm: Dispatch<SetStateAction<string[]>>;
  label?: string;
  required?: boolean;
  tip?: string;
  max?: number;
}

export default function PillsInput({
  pillsFromForm,
  setPillsInForm,
  label,
  required = false,
  tip,
  max = 10
}: IPillsInputProps) {
  const [text, setText] = useState<string>('');

  const handleTextTyped = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCommaTyped = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key === ',' && text !== '' && /[^,]/.test(text)) {
      const newPill = (
        text.endsWith(',') ? '#' + text.slice(0, -1) : '#' + text
      ).trim();
      setPillsInForm((prevPills) => [...prevPills, newPill]);
      setText('');
    }
  };

  const handleRemovePill = (pill: string) => {
    setPillsInForm((prevPills) => prevPills.filter((item) => item !== pill));
  };

  return (
    <div className='form-control w-full'>
      {(label || tip) && (
        <div className='flex items-center'>
          {label && (
            <div className='label gap-1'>
              <span className='label-text'>{label}</span>
              <span className='label-text text-error'>{required && '*'}</span>
            </div>
          )}

          {tip && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip={tip}
            >
              <LuInfo className='h-3 w-3' />
            </div>
          )}
        </div>
      )}

      <label
        htmlFor='badgeInput'
        className={`border w-full min-h-[3rem] p-2 flex gap-2 items-center flex-wrap input input-bordered h-fit focus-within:outline-none focus-within:border-primary ${
          pillsFromForm.length === max ? 'input-disabled' : ''
        }`}
      >
        {pillsFromForm?.map((pill, index) => (
          <div
            key={`pill_${index}_${pill}`}
            className='badge cursor-pointer badge-outline badge-primary bg-base-100'
            onClick={() => handleRemovePill(pill)}
          >
            {pill}
          </div>
        ))}

        <input
          type='text'
          onChange={handleTextTyped}
          className={`focus:outline-none focus:border-primary text-sm ${Math.max(
            text.length,
            5
          )}ch w-fit ${
            pillsFromForm.length === max ? 'input-disabled' : ''
          } bg-inherit`}
          onKeyUp={handleCommaTyped}
          size={Math.max(text.length, 5)}
          id='badgeInput'
          value={text}
          disabled={pillsFromForm.length === max}
        />
      </label>
    </div>
  );
}

// FIX @thesudeshdas => Needs to use a unique id otherwise can not be used twice in one form

// TODO @thesudeshdas => Placeholder for the input by default
