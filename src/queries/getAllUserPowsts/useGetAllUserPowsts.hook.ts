import { useSuspenseQuery } from '@tanstack/react-query';
import axiosClient from '../../config/axiosInstance';
import { IGetAllUserPowstsBody } from '../../types/powstTypes/powst.types';

const getAllUserPowsts = (req: IGetAllUserPowstsBody) =>
  axiosClient.get(`/powst/user/${req.userId}`).then((res) => res.data);

export function useGetAllUserPowsts({ userId }: IGetAllUserPowstsBody) {
  return useSuspenseQuery({
    queryKey: ['allUserPowsts', userId],
    queryFn: () => getAllUserPowsts({ userId })
  });
}
