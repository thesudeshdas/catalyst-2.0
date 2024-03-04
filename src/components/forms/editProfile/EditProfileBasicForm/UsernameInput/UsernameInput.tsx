/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { LuCheck, LuInfo, LuX } from 'react-icons/lu';

import useDebounce from '../../../../../hooks/useDebounce/useDebounce';
import useGetUsernameAvailability from '../../../../../queries/getUsernameAvailability/useGetUsernameAvailability.query';

interface IUsernameInputProps {
  placeholder?: string;
}

export default function UsernameInput(
  props: IUsernameInputProps & UseControllerProps<any>
) {
  const { field } = useController(props);

  const [searchUsername, setSearchUsername] = useState<string>(field.value);

  const debouncedSearchValue = useDebounce({
    inputValue: searchUsername,
    delay: 1000
  });

  const {
    data: isUsernameAvailable,
    isPending: isUsernameAvailabilityPending
  } = useGetUsernameAvailability({
    username: debouncedSearchValue
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const noWhitespace = event.target.value.replace(/\s+/g, '');

    field.onChange(noWhitespace);

    // check for spaces in between and special characters
    if (noWhitespace) setSearchUsername(noWhitespace);
  };

  return (
    <label className='form-control w-full'>
      <div className='flex items-center'>
        <div className='label gap-1'>
          <span className='label-text'>Username</span>
        </div>

        <div
          className='tooltip tooltip-right cursor-pointer'
          data-tip='Must be unique, and cannot contain space'
        >
          <LuInfo className='h-3 w-3' />
        </div>
      </div>

      <div className='join'>
        <input
          {...field}
          onChange={handleInputChange}
          type='text'
          placeholder={props.placeholder || 'techbro'}
          className='join-item input input-bordered w-full focus:outline-none focus:border-primary text-sm'
        />

        {isUsernameAvailabilityPending && searchUsername?.trim().length > 0 ? (
          <div className='join-item btn btn-outline btn-ghost input-bordered p-3'>
            <span className='loading'></span>
          </div>
        ) : isUsernameAvailable?.success ? (
          <div className='join-item btn btn-outline btn-ghost input-bordered p-3'>
            <LuCheck className='h-6 w-6 text-success' />
          </div>
        ) : isUsernameAvailable?.success === false ? (
          <div className='join-item btn btn-outline btn-ghost input-bordered p-3'>
            <LuX className='h-6 w-6 text-error' />
          </div>
        ) : null}
      </div>

      {!isUsernameAvailabilityPending && isUsernameAvailable?.message && (
        <div className='label'>
          <span
            className={`label-text-alt font-medium ${
              isUsernameAvailable?.success ? 'text-success' : 'text-error'
            }`}
          >
            {isUsernameAvailable?.message}
          </span>
        </div>
      )}
    </label>
  );
}
