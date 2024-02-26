/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, useEffect, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { FiInfo } from 'react-icons/fi';

// declare props types
interface ITextInputProps {
  label?: string;
  placeholder?: string;
  tip?: string;
  required?: boolean;
  leftIcon?: ReactNode;
  disabled?: boolean;
  maxLength?: number;
  noResize?: boolean;
}

export default function TextArea(
  props: ITextInputProps & UseControllerProps<any>
) {
  const {
    field,
    fieldState: { error }
  } = useController(props);

  const [charactersLeft, setCharactersLeft] = useState<number>(
    props.maxLength || Number.MAX_VALUE
  );

  useEffect(() => {
    if (props.maxLength) {
      setCharactersLeft(props.maxLength - field?.value?.length);
    }
  }, [field.value, props.maxLength]);

  return (
    <label className='form-control w-full group'>
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
              <FiInfo className='h-3 w-3' />
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

        <textarea
          {...field}
          placeholder={props.placeholder}
          className={`join-item input input-bordered w-full focus:outline-none focus:border-primary text-sm py-4 z-10 h-32 ${
            props.noResize ? 'resize-none' : ''
          }`}
          disabled={props.disabled}
          maxLength={props.maxLength}
          // onChange={props?.maxLength ? handleTextInput : undefined}
        />
      </div>

      {(error || props.maxLength) && (
        <div className='label items-start'>
          {error && (
            <span className='label-text-alt text-error font-medium'>
              {error?.message}
            </span>
          )}

          {props.maxLength && (
            <p className='ml-auto label-text-alt -translate-y-[150%] group-focus-within:translate-y-0 transition-transform'>
              <span className='font-bold'>{charactersLeft}</span> characters
              left
            </p>
          )}
        </div>
      )}
    </label>
  );
}
