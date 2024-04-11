import { LuHeart } from 'react-icons/lu';

import useAuthContext from '../../contexts/AuthContext/authContext.hook';
import useLikes from '../../hooks/useLikes/useLikes.hook';

// declare props types
interface IPowstLikeButtonProps {
  noOfLikes: number;
  powstId: string;
  likedBy: string[];
}

export default function PowstLikeButton({
  powstId,
  noOfLikes,
  likedBy
}: IPowstLikeButtonProps) {
  const {
    authState: { userId }
  } = useAuthContext();

  const { handleLikePowst, handleUnlikePowst, hasUserLiked } = useLikes({
    powstId,
    userId,
    likedBy
  });

  return (
    <button
      className={`btn btn-ghost btn-sm p-0 hover:bg-inherit min-h-0 h-fit group transition-colors ${
        hasUserLiked()
          ? 'text-red-500 hover:text-base-content'
          : 'hover:text-red-500'
      }`}
      onClick={hasUserLiked() ? handleUnlikePowst : handleLikePowst}
    >
      <LuHeart
        fill={hasUserLiked() ? 'red' : 'transparent'}
        className='group-hover:fill-none'
      />

      <p>{noOfLikes}</p>
    </button>
  );
}
