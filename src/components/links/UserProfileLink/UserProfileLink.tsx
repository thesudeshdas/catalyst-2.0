// import components
import UserAvatar from '../../avatars/UserAvatar/UserAvatar';

export default function UserProfileLink() {
  return (
    <div className='flex items-center gap-2'>
      <UserAvatar
        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
        size='md'
      />

      <div>
        <h3>Sudesh Das</h3>
      </div>

      <button className='btn btn-xs btn-primary'>Follow</button>
    </div>
  );
}
