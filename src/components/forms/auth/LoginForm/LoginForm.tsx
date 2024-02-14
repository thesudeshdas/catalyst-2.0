// import react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';
import PasswordInput from '../../../inputs/PasswordInput/PasswordInput';

// import hooks
import { useLogin } from '../../../../mutations/login/useLogin.hook';

// import schema
import { loginSchema } from './loginForm.schema';

// import types
import { ILoginForm } from '../../../../types/authTypes/auth.types';

export default function LoginForm() {
  const { loginMutation, isLoginPending } = useLogin();

  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema)
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginMutation(data);
  };

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

      <button
        className={`btn btn-primary ${isLoginPending ? 'btn-disabled' : ''}`}
      >
        {isLoginPending && <span className='loading loading-spinner'></span>}
        Log In
      </button>
    </form>
  );
}
