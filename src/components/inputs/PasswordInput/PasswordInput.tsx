/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function PasswordInput(
  props: { label?: string } & UseControllerProps<any>
) {
  const {
    field,
    fieldState: { error }
  } = useController(props);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label className='form-control w-full'>
      <div className='label'>
        <span className='label-text'>Password</span>
        <Link
          to='/forgot-password'
          className='label-text-alt text-primary'
        >
          Forgot Password?
        </Link>
      </div>

      <div className='join'>
        <input
          {...field}
          type={showPassword ? 'text' : 'password'}
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          className='input input-bordered w-full join-item'
        />

        <button
          type='button'
          className='btn btn-outline input-bordered join-item'
          onClick={toggleShowPassword}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
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
