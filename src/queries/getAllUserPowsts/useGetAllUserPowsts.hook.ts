// import react-query
import { useQuery } from '@tanstack/react-query';

// import clients
import axiosClient from '../../config/axiosInstance';

// import types
import { IGetAllUserPowstsBody } from '../../types/powstTypes/powst.types';
import { IPowst } from '../../types/createPowstTypes/createPowst.types';

const getAllUserPowsts = (req: IGetAllUserPowstsBody): Promise<IPowst[]> =>
  axiosClient.get(`/powst/user/${req.userId}`).then((res) => res.data);

export function useGetAllUserPowsts({ userId }: IGetAllUserPowstsBody) {
  return useQuery({
    queryKey: ['allUserPowsts', userId],
    queryFn: () => getAllUserPowsts({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
