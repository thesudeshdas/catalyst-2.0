// import rrd
import { useNavigate } from 'react-router-dom';

// import react-error-boundary
import { useErrorBoundary } from 'react-error-boundary';

// declare prop types
interface IGlobalErrorFallbackProps {
  error: Error;
}

export default function GlobalErrorFallback({
  error
}: IGlobalErrorFallbackProps) {
  const navigate = useNavigate();

  const { resetBoundary } = useErrorBoundary();

  const handleResetErrorBoundary = () => {
    navigate('/feed');
    resetBoundary();
  };

  const handleResetWithReload = () => {
    location.reload();
    resetBoundary();
  };

  return (
    <div
      role='alert'
      className='grid place-items-center h-screen'
    >
      <div className='flex flex-col items-center gap-6'>
        <h1 className='font-semibold text-xl'>Something went wrong 😢</h1>

        <p className='text-error max-w-[300px] text-center'>{error.message}</p>

        <button
          className='btn btn-primary'
          type='button'
          onClick={handleResetErrorBoundary}
        >
          Go to home
        </button>

        <button
          className='btn btn-primary'
          type='button'
          onClick={handleResetWithReload}
        >
          Reload
        </button>
      </div>
    </div>
  );
}
