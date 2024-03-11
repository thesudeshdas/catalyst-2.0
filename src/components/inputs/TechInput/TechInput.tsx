/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react';
import { UseFieldArrayRemove } from 'react-hook-form';
import { LuInfo } from 'react-icons/lu';

import { techIcons } from '../../../assets/resources/techStack.icons';

interface ITechInputProps {
  label?: string;
  required?: boolean;
  tip?: string;
  max?: number;
  placeholder?: string;
  fields: any;
  append: any;
  remove: UseFieldArrayRemove;
}

export default function TechInput({
  label,
  required = false,
  tip,
  max = 10,
  placeholder,
  fields,
  append,
  remove
}: ITechInputProps) {
  const [text, setText] = useState<string>('');

  const handleTextTyped = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddTech = (tech: string, version: string) => {
    append({ name: tech, version });
    setText('');
  };

  const handleRemoveTech = (index: number) => remove(index);

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

      <ul className='flex flex-wrap gap-3'>
        {fields?.map(
          (tech: { name: string; version: string }, index: number) => (
            <li key={tech.name}>
              <button
                className='btn btn-ghost btn-square'
                onClick={() => handleRemoveTech(index)}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-${tech.version}.svg`}
                  alt={tech.name}
                  className='h-8 w-8 object-contain'
                  key={tech.name}
                />
              </button>
            </li>
          )
        )}
      </ul>

      <label
        htmlFor='techInput'
        className='form-control w-full overflow-hidden'
      >
        <input
          type='text'
          onChange={handleTextTyped}
          className='input input-bordered w-full focus:outline-none focus:border-primary text-sm'
          id='techInput'
          value={text}
          disabled={fields.length === max}
          placeholder={placeholder}
        />

        {text?.length > 0 && (
          <ul className='border input-bordered text-sm rounded-md'>
            {techIcons
              ?.filter((icon) =>
                icon.name.includes(text?.toLowerCase()?.replace(/ /g, ''))
              )
              ?.slice(0, 5)
              .map((tech) => (
                <li
                  role='option'
                  key={tech.name}
                  value={tech.name}
                  className='mb- last:mb-0'
                >
                  <button
                    className='btn btn-ghost gap-4 w-full justify-start'
                    disabled={fields?.find(
                      (item: { name: string }) => item.name === tech.name
                    )}
                    onClick={() =>
                      handleAddTech(tech.name, tech.versions.svg[0])
                    }
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-${tech.versions.svg[0]}.svg`}
                      alt={tech.name}
                      className='h-8 w-8 object-contain'
                      key={tech.name}
                    />

                    {tech.name}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </label>
    </div>
  );
}

// FIX @thesudeshdas => Needs to use a unique id otherwise can not be used twice in one form

// TODO @thesudeshdas => Placeholder for the input by default

// TODO @thesudeshdas => Create a fuzzy search and show the text that matches the search as highlighted
