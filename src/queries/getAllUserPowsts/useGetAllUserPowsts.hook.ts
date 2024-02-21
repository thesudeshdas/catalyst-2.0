// import react-query
import { useQuery } from '@tanstack/react-query';

// import clients
import axiosClient from '../../config/axiosInstance';

// import types
import { IGetAllUserPowstsBody } from '../../types/powstTypes/powst.types';
import { IUserPowst } from '../../types/userTypes/user.types';

const getAllUserPowsts = (req: IGetAllUserPowstsBody): Promise<IUserPowst[]> =>
  axiosClient.get(`/users/${req.userId}/powsts`).then((res) => res.data.powsts);

export function useGetAllUserPowsts({ userId }: IGetAllUserPowstsBody) {
  return useQuery({
    queryKey: ['allUserPowsts', userId],
    queryFn: () => getAllUserPowsts({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
