// import rrd
import { Link } from 'react-router-dom';

// import react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';

// import zod
import { zodResolver } from '@hookform/resolvers/zod';

// import icons
import { FiEye } from 'react-icons/fi';

// import hooks
import { useLogin } from './useLogin.hook';

// import schema
import { loginSchema } from './loginForm.schema';

// import types
import { ILoginForm } from '../../../../types/authTypes/auth.types';

export default function LoginForm() {
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm<ILoginForm>({
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
      <label className='form-control w-full '>
        <div className='label'>
          <span className='label-text'>Email address</span>
        </div>

        <input
          type='text'
          placeholder='awesomedev@email.com'
          className='input input-bordered w-full '
          {...register('email')}
        />

        {formErrors?.email && (
          <div className='label'>
            <span className='label-text-alt text-error font-medium'>
              {formErrors?.email?.message}
            </span>
          </div>
        )}
      </label>

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
            type='password'
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
            className='input input-bordered w-full join-item'
            {...register('password')}
          />

          <button
            type='button'
            className='btn btn-outline input-bordered join-item'
          >
            <FiEye />
          </button>
        </div>

        {formErrors?.password && (
          <div className='label'>
            <span className='label-text-alt text-error font-medium'>
              {formErrors?.password?.message}
            </span>
          </div>
        )}
      </label>

      <button className='btn btn-primary'>Log In</button>
    </form>
  );
}
