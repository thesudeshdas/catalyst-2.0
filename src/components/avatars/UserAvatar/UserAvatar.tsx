import { useNavigate } from 'react-router-dom';

// declare props types
type IUserAvatarSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface IUserAvatarProps {
  src: string;
  name: string;
  size?: IUserAvatarSizes;
  variant?: 'avatar' | 'profile' | 'divider';
  followAction?: boolean;
  username: string;
  userId: string;
  noRedirect?: boolean;
}

export default function UserAvatar({
  src,
  name,
  size = 'sm',
  variant = 'avatar',
  followAction = false,
  username,
  userId,
  noRedirect = false
}: IUserAvatarProps) {
  const navigate = useNavigate();

  const getAvatarSize = (size: IUserAvatarSizes) => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';

      case 'md':
        return 'w-8 h-8';

      case 'lg':
        return 'w-10 h-10';

      case 'xl':
        return 'w-12 h-12';

      case '2xl':
        return 'w-16 h-16';

      default:
        return 'w-6 h-6';
    }
  };

  const handleGoToProfile = () => {
    navigate(`/${username}`);
  };

  if (variant === 'avatar') {
    return (
      <div
        className={`${getAvatarSize(size)} mask mask-squircle ${
          noRedirect ? '' : ' cursor-pointer'
        } flex-shrink-0`}
        onClick={noRedirect ? undefined : handleGoToProfile}
      >
        <img
          src={src}
          alt={name}
          className='h-full w-full object-cover'
        />
      </div>
    );
  }

  if (variant === 'profile') {
    return (
      <div
        className={`flex items-center gap-2 ${
          noRedirect ? '' : ' cursor-pointer'
        }`}
        onClick={noRedirect ? undefined : handleGoToProfile}
      >
        <div
          className={`${getAvatarSize(size)} mask mask-squircle  flex-shrink-0`}
        >
          <img
            src={src}
            alt={name}
            className='h-full w-full object-cover'
          />
        </div>

        <h3 className='text-sm'>{name}</h3>

        {followAction && (
          <button className='btn btn-xs btn-primary'>Follow</button>
        )}
      </div>
    );
  }

  if (variant === 'divider') {
    return (
      <div className='divider'>
        <div
          className='flex flex-col items-center gap-1 group'
          onClick={noRedirect ? undefined : handleGoToProfile}
        >
          <div
            className={`${getAvatarSize(size)} mask mask-squircle ${
              noRedirect ? '' : ' cursor-pointer'
            } flex-shrink-0`}
          >
            <img
              src={src}
              alt={name}
              className='h-full w-full object-cover'
            />
          </div>

          <h3 className='font-medium group-hover:text-primary transition-colors'>
            {name}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${getAvatarSize(size)} mask mask-squircle ${
        noRedirect ? '' : ' cursor-pointer'
      } flex-shrink-0`}
      onClick={noRedirect ? undefined : handleGoToProfile}
    >
      <img
        src={src}
        alt={name}
        className='h-full w-full object-cover'
      />
    </div>
  );
}
