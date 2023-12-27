// import rrd
import { Link, Navigate } from 'react-router-dom';

// import components
import AuthPageLayout from '../../../components/pageLayout/AuthPageLayout/AuthPageLayout';
import RegisterForm from '../../../components/forms/auth/RegisterForm/RegisterForm';

// import utils
import { isAccessTokenExpired } from '../../../utils/isTokenExpired/isAccessTokenExpired.utils';

export default function Register() {
  const accessToken = localStorage?.getItem('accessToken');

  if (accessToken && !isAccessTokenExpired(JSON.parse(accessToken))) {
    return (
      <Navigate
        to='/feed'
        replace
      />
    );
  }

  return (
    <AuthPageLayout
      imgSources={{
        small: {
          src: 'https://images.unsplash.com/photo-1656087815456-8810c8c3a398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: ''
        }
      }}
    >
      <div className='grid place-items-center h-full md:max-w-[768px] w-full flex-shrink-0 xl:max-w-none xl:flex-shrink'>
        <div className='base-100 flex flex-col md:items-start gap-6 max-w-[320px] md:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[500px] w-full'>
          <h1 className='font-semibold text-3xl text-center'>
            Register for Catalyst
          </h1>

          <button className='btn btn-primary'>Continue with Google</button>

          <div className='divider'>Or</div>

          <RegisterForm />

          <p className='text-sm text-center md:text-right md:absolute right-6 top-6'>
            Already a member?{' '}
            <Link
              to='/login'
              className='text-primary hover:underline'
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AuthPageLayout>
  );
}
