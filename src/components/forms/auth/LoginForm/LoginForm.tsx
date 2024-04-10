import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLogin } from '../../../../mutations/login/useLogin.mutation';
import { ILoginForm } from '../../../../types/authTypes/auth.types';
import { getErrorMessage } from '../../../../utils/getErrorMessage/getErrorMessage.utils';
import PasswordInput from '../../../inputs/PasswordInput/PasswordInput';
import TextInput from '../../../inputs/TextInput/TextInput';

import { loginSchema } from './loginForm.schema';

export default function LoginForm() {
  const {
    mutate: mutateLogin,
    isPending: isLoginPending,
    isError: isLoginErrored,
    error: loginError
  } = useLogin();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const { control, handleSubmit, setError, watch } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema)
  });

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    mutateLogin(data);
  };

  // @desc => Here, we are assigning the error if the user does not exist or if the password is invalid.
  useEffect(() => {
    if (isLoginErrored) {
      setErrorMessage(
        getErrorMessage(loginError?.response?.data) ?? 'Invalid credentials'
      );
    }
  }, [isLoginErrored, loginError?.response?.data, setError]);

  // @desc => This useEffect will clear the error message when the user inputs in the input fields
  useEffect(() => {
    if (watchEmail?.length > 0 || watchPassword?.length > 0) {
      setErrorMessage('');
    }
  }, [watchEmail, watchPassword]);

  return (
    <form
      className='flex flex-col gap-6 md:items-start w-full'
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <TextInput
        control={control}
        name='email'
        label='Email Address'
        placeholder='awesomedev@email.com'
      />

      <PasswordInput
        control={control}
        name='password'
        label='Password'
      />

      {errorMessage && (
        <div className='label'>
          <span className='label-text-alt text-error font-medium'>
            {errorMessage}
          </span>
        </div>
      )}

      <button
        className={`btn btn-primary ${isLoginPending ? 'btn-disabled' : ''}`}
      >
        {isLoginPending && <span className='loading loading-spinner'></span>}
        Log In
      </button>
    </form>
  );
}
