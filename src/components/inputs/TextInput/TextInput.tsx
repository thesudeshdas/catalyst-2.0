/* eslint-disable @typescript-eslint/no-explicit-any */

// import react hook form
import { UseControllerProps, useController } from 'react-hook-form';

// import icons
import { FiInfo } from 'react-icons/fi';

// declare props types
interface ITextInputProps {
  label?: string;
  placeholder?: string;
  tip?: string;
  required?: boolean;
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
            <div className='label'>
              <span className='label-text'>
                {props.label} {props.required && '*'}
              </span>
            </div>
          )}

          {props.tip && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip={props.tip}
            >
              <FiInfo className='h-[0.8rem] w-[0.8rem]' />
            </div>
          )}
        </div>
      )}

      <input
        {...field}
        type='text'
        placeholder={props.placeholder}
        className='input input-bordered w-full'
      />

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
