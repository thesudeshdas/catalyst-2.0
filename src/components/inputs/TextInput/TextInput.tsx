/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { LuInfo } from 'react-icons/lu';

// declare props types
interface ITextInputProps {
  label?: string;
  placeholder?: string;
  tip?: string;
  required?: boolean;
  leftIcon?: ReactNode;
  disabled?: boolean;
}

export default function TextInput(
  props: ITextInputProps & UseControllerProps<any>
) {
  const {
    field,
    fieldState: { error }
  } = useController(props);

  return (
    <label className='form-control w-full'>
      {(props.label || props.tip) && (
        <div className='flex items-center'>
          {props.label && (
            <div className='label gap-1'>
              <span className='label-text'>{props.label}</span>
              <span className='label-text text-error'>
                {props.required && '*'}
              </span>
            </div>
          )}

          {props.tip && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip={props.tip}
            >
              <LuInfo className='h-3 w-3' />
            </div>
          )}
        </div>
      )}

      <div className='join'>
        {props.leftIcon && (
          <div className='join-item btn btn-outline btn-ghost input-bordered p-3'>
            {props.leftIcon}
          </div>
        )}

        <input
          {...field}
          type='text'
          placeholder={props.placeholder}
          className='join-item input input-bordered w-full focus:outline-none focus:border-primary text-sm'
          disabled={props.disabled}
        />
      </div>

      {error && (
        <div className='label'>
          <span className='label-text-alt text-error font-medium'>
            {error?.message}
          </span>
        </div>
      )}
    </label>
  );
}
