import { Link, Navigate } from 'react-router-dom';

import LoginForm from '../../../components/forms/auth/LoginForm/LoginForm';
import AuthPageLayout from '../../../components/pageLayout/AuthPageLayout/AuthPageLayout';
import useDocumentTitle from '../../../hooks/useDocumentTitle/useDocumentTitle';
import { isAccessTokenExpired } from '../../../utils/isTokenExpired/isAccessTokenExpired.utils';

export default function Login() {
  const accessToken = localStorage?.getItem('accessToken');

  useDocumentTitle('Catalyst | Login');

  if (accessToken && !isAccessTokenExpired(accessToken)) {
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
          src: 'https://images.unsplash.com/photo-1564694457220-0efef1a70d6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2hlfGVufDB8fDB8fHww',
          alt: ''
        }
      }}
    >
      <div className='grid place-items-center h-full md:max-w-[768px] w-full flex-shrink-0 xl:max-w-none xl:flex-shrink'>
        <div className='base-100 flex flex-col md:items-start gap-6 max-w-[320px] md:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[500px] w-full'>
          <h1 className='font-semibold text-3xl text-center'>
            Log in to Catalyst
          </h1>

          <button className='btn btn-primary'>Continue with Google</button>

          <div className='divider'>Or</div>

          <LoginForm />

          <p className='text-sm text-center md:text-right md:absolute right-6 top-6'>
            Not a member?{' '}
            <Link
              to='/register'
              className='text-primary hover:underline'
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </AuthPageLayout>
  );
}
