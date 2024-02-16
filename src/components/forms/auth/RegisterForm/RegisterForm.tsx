// import react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import components
import TextInput from '../../../inputs/TextInput/TextInput';
import PasswordInput from '../../../inputs/PasswordInput/PasswordInput';
import CheckboxInput from '../../../inputs/CheckboxInput/CheckboxInput';

// import hooks
import { useRegister } from './useRegister.hook';

// import schema
import { registerSchema } from './registerForm.schema';

// import types
import { IRegisterForm } from '../../../../types/authTypes/auth.types';

export default function RegisterForm() {
  const { mutate } = useRegister();

  const { control, handleSubmit, watch } = useForm<IRegisterForm>({
    resolver: zodResolver(registerSchema)
  });

  const onRegisterSubmit: SubmitHandler<IRegisterForm> = (data) => {
    mutate(data);
  };

  const watchAcceptTerms = watch('acceptTerms');

  return (
    <form
      className='flex flex-col gap-6 md:items-start w-full'
      onSubmit={handleSubmit(onRegisterSubmit)}
    >
      <div className='flex flex-col gap-2 md:flex-row w-full'>
        <TextInput
          control={control}
          name='firstName'
          label='First Name'
          placeholder='Awesome'
        />

        <TextInput
          control={control}
          name='lastName'
          label='Last Name (Optional)'
          placeholder='Dev'
        />
      </div>

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

      <CheckboxInput
        name='acceptTerms'
        control={control}
        label={
          <p className='label-text'>
            Creating an account means you&apos;re okay with our{' '}
            <a
              href='https://www.google.com/'
              target='_blank'
              className='text-primary'
            >
              Terms of Service, Privacy Policy,
            </a>{' '}
            and our default{' '}
            <a
              href='https://www.google.com/'
              target='_blank'
              className='text-primary'
            >
              Notifications Settings.
            </a>
          </p>
        }
      />

      <button
        type='submit'
        disabled={!watchAcceptTerms}
        className='btn btn-primary'
      >
        Register
      </button>
    </form>
  );
}
