/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseControllerProps, useController } from 'react-hook-form';

export default function TextInput(
  props: { label?: string; placeholder?: string } & UseControllerProps<any>
) {
  const {
    field,
    fieldState: { error }
  } = useController(props);

  return (
    <label className='form-control w-full'>
      {props.label && (
        <div className='label'>
          <span className='label-text'>{props.label}</span>
        </div>
      )}

      <input
        {...field}
        type='text'
        placeholder={props.placeholder}
        className='input input-bordered w-full '
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
