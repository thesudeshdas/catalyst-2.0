// import rrd
import { Link } from 'react-router-dom';

// import components
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';

export default function UserProfileDividerLink() {
  return (
    <div className='divider'>
      <Link
        to='/profile'
        className='flex flex-col items-center gap-1 group'
      >
        <UserAvatar
          src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
          size='xxl'
        />

        <h3 className='font-medium group-hover:text-primary transition-colors'>
          Sudesh Das
        </h3>
      </Link>
    </div>
  );
}
