// import react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';
import PasswordInput from '../../../inputs/PasswordInput/PasswordInput';

// import hooks
import { useLogin } from './useLogin.hook';

// import schema
import { loginSchema } from './loginForm.schema';

// import types
import { ILoginForm } from '../../../../types/authTypes/auth.types';

export default function LoginForm() {
  const login = useLogin();

  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema)
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    login(data);
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

      <button className='btn btn-primary'>Log In</button>
    </form>
  );
}
