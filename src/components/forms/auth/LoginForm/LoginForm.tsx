// import rrd
import { Link } from 'react-router-dom';

// import icons
import { FiEye } from 'react-icons/fi';

export default function LoginForm() {
  return (
    <form className='flex flex-col gap-6 md:items-start w-full'>
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
          <Link
            to='/forgot-password'
            className='label-text-alt text-primary'
          >
            Forgot Password?
          </Link>
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

      <button className='btn btn-primary'>Log In</button>
    </form>
  );
}
