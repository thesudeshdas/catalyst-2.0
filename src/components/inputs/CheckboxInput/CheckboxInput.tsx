/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, ReactElement, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export default function CheckboxInput(
  props: {
    label?: ReactElement;
    defaultChecked?: boolean;
  } & UseControllerProps<any>
) {
  const {
    field,
    fieldState: { error }
  } = useController(props);

  const [checked, setChecked] = useState<boolean>(
    props.defaultChecked || false
  );

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    field.onChange(event.target.checked);
  };

  return (
    <div className='form-control w-full'>
      <label className='label cursor-pointer gap-2'>
        <input
          type='checkbox'
          className='checkbox checkbox-primary'
          onChange={handleCheck}
          defaultChecked={checked}
        />

        {props.label}
      </label>

      {error && (
        <div className='label'>
          <span className='label-text-alt text-error font-medium'>
            {error?.message}
          </span>
        </div>
      )}
    </div>
  );
}
