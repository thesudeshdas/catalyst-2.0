import { LuChevronLeft } from 'react-icons/lu';
import { Link } from 'react-router-dom';

// declare props types
interface ICreatePowstPreviousButtonProps {
  link: string;
}

export default function CreatePowstPreviousButton({
  link
}: ICreatePowstPreviousButtonProps) {
  return (
    <Link to={link}>
      <button className='btn btn-ghost pl-0'>
        <LuChevronLeft className='h-6 w-6' /> Previous
      </button>
    </Link>
  );
}
