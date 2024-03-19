import { LuChevronLeft } from 'react-icons/lu';
import { Link } from 'react-router-dom';

// declare props types
interface ICreatePowstPreviousButtonProps {
  link: string;
  disabled?: boolean;
}

export default function CreatePowstPreviousButton({
  disabled = false,
  link
}: ICreatePowstPreviousButtonProps) {
  return (
    <Link to={link}>
      <button
        className='btn btn-ghost pl-0'
        disabled={disabled}
      >
        <LuChevronLeft className='h-6 w-6' /> Previous
      </button>
    </Link>
  );
}
