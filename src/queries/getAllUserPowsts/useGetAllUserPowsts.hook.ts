import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import { IGetAllUserPowstsBody } from '../../types/powstTypes/powst.types';
import { IUserPowst } from '../../types/userTypes/user.types';

const getAllUserPowsts = (req: IGetAllUserPowstsBody): Promise<IUserPowst[]> =>
  axiosClient.get(`/powst/${req.userId}`).then((res) => res.data.powsts);

export function useGetAllUserPowsts({ userId }: IGetAllUserPowstsBody) {
  return useQuery({
    queryKey: ['allUserPowsts', userId],
    queryFn: () => getAllUserPowsts({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
