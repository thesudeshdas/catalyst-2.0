// declare props types
type IUserAvatarSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface IUserAvatarProps {
  src: string;
  name: string;
  size?: IUserAvatarSizes;
  variant?: 'avatar' | 'profile';
  followAction?: boolean;
}

export default function UserAvatar({
  src,
  name,
  size = 'sm',
  variant = 'avatar',
  followAction = false
}: IUserAvatarProps) {
  const getAvatarSize = (size: IUserAvatarSizes) => {
    switch (size) {
      case 'sm':
        return 'w-6';

      case 'md':
        return 'w-8';

      case 'lg':
        return 'w-10';

      case 'xl':
        return 'w-12';

      case '2xl':
        return 'w-16';

      default:
        return 'w-6';
    }
  };

  if (variant === 'avatar') {
    return (
      <div
        className={`${getAvatarSize(size)} mask mask-squircle flex-shrink-0`}
      >
        <img
          src={src}
          alt={name}
        />
      </div>
    );
  }

  if (variant === 'profile') {
    return (
      <div className='flex items-center gap-2'>
        <div
          className={`${getAvatarSize(size)} mask mask-squircle flex-shrink-0`}
        >
          <img
            src={src}
            alt={name}
          />
        </div>

        <h3 className='text-sm'>{name}</h3>

        {followAction && (
          <button className='btn btn-xs btn-primary'>Follow</button>
        )}
      </div>
    );
  }

  return (
    <div className={`${getAvatarSize(size)} mask mask-squircle flex-shrink-0`}>
      <img
        src={src}
        alt={name}
      />
    </div>
  );
}
