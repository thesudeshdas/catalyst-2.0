/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { UseFieldArrayRemove } from 'react-hook-form';
import { LuInfo } from 'react-icons/lu';

interface IPillsInputProps {
  label?: string;
  required?: boolean;
  tip?: string;
  max?: number;
  fields: any;
  append: any;
  remove: UseFieldArrayRemove;
  htmlId: string;
  placeholder?: string;
}

export default function PillsInput({
  label,
  required = false,
  tip,
  max = 10,
  fields,
  append,
  remove,
  htmlId,
  placeholder
}: IPillsInputProps) {
  const [text, setText] = useState<string>('');

  const handleTextTyped = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCommaTyped = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key === ',' && text !== '' && /[^,]/.test(text)) {
      const newPill = text.endsWith(',')
        ? '#' + text.trim().slice(0, -1)
        : '#' + text.trim();

      append({ text: newPill });
      setText('');
    }
  };

  const handleRemovePill = (index: number) => remove(index);

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
          fields.length === max ? 'input-disabled' : ''
        }`}
      >
        {fields?.map((pill: { text: string }, index: number) => (
          <div
            key={`pill_${index}_${pill}`}
            className='badge cursor-pointer badge-outline badge-primary bg-base-100'
            onClick={() => handleRemovePill(index)}
          >
            {pill.text}
          </div>
        ))}

        <input
          type='text'
          onChange={handleTextTyped}
          className={`focus:outline-none focus:border-primary text-sm ${Math.max(
            text.length,
            5
          )}ch w-fit ${
            fields.length === max ? 'input-disabled' : ''
          } bg-inherit`}
          onKeyUp={handleCommaTyped}
          size={Math.max(text.length, 5)}
          id={htmlId}
          value={text}
          disabled={fields.length === max}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}
