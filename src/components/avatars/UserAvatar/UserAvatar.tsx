// declare props types
interface IUserAvatarProps {
  src: string;
  size?: 'sm' | 'md' | 'xxl';
}

export default function UserAvatar({ src, size = 'sm' }: IUserAvatarProps) {
  return (
    <div
      className={`     ${
        size === 'md' ? 'w-8' : size === 'xxl' ? 'w-12' : 'w-6'
      }   mask mask-squircle flex-shrink-0`}
    >
      <img src={src} />
    </div>
  );
}
