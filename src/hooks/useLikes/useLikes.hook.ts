import useAuthContext from '../../contexts/AuthContext/authContext.hook';
import useLikePowst from '../../mutations/likePowst/useLikePowst.mutation';
import useUnlikePowst from '../../mutations/unlikePowst/useUnlikePowst.mutation';

// declare arguments type
interface IUseLikes {
  powstId: string;
  userId: string;
  likedBy?: string[];
}

export default function useLikes({ powstId, userId, likedBy }: IUseLikes) {
  const { mutate: mutateLikePowst } = useLikePowst();
  const { mutate: mutateUnlikePowst } = useUnlikePowst();

  const { authDispatch } = useAuthContext();

  const handleLikePowst = () => {
    if (userId) {
      mutateLikePowst({ powstId, userId });
    } else {
      authDispatch({ type: 'SHOW_MODAL' });
    }
  };

  const handleUnlikePowst = () => {
    mutateUnlikePowst({ powstId, userId });
  };

  const hasUserLiked = () => likedBy?.includes(userId);

  return { handleLikePowst, handleUnlikePowst, hasUserLiked };
}
