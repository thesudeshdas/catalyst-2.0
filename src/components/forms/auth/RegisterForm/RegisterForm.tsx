// import icons
import { FiEye } from 'react-icons/fi';

export default function RegisterForm() {
  return (
    <form
      className='flex flex-col gap-6 md:items-start w-full'
      noValidate
    >
      <label className='form-control w-full '>
        <div className='label'>
          <span className='label-text'>Name</span>
        </div>

        <input
          type='text'
          placeholder='Awesome Dev'
          className='input input-bordered w-full '
        />
      </label>

      <label className='form-control w-full '>
        <div className='label'>
          <span className='label-text'>Email address</span>
        </div>

        <input
          type='text'
          placeholder='awesomedev@email.com'
          className='input input-bordered w-full '
        />
      </label>

      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Password</span>
        </div>

        <div className='join'>
          <input
            type='text'
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
            className='input input-bordered w-full join-item'
          />

          <button className='btn btn-outline input-bordered join-item'>
            <FiEye />
          </button>
        </div>
      </label>

      <div className='form-control'>
        <label className='label cursor-pointer gap-2'>
          <input
            type='checkbox'
            className='checkbox checkbox-primary'
          />

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
        </label>
      </div>

      <button
        type='submit'
        className='btn btn-primary'
      >
        Register
      </button>
    </form>
  );
}
