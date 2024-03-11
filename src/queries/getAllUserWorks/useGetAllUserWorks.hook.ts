import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import * as apiKeys from '../../constants/apisKeys.constants';
import { IUserWork } from '../../types/userTypes/user.types';
import { IGetAllUserWorksBody } from '../../types/workTypes/work.types';

const getAllUserWork = (req: IGetAllUserWorksBody): Promise<IUserWork[]> =>
  axiosClient.get(`work/${req.userId}`).then((res) => res.data.works);

export function useGetAllUserWorks({ userId }: IGetAllUserWorksBody) {
  return useQuery({
    queryKey: [apiKeys.work.GET_USER_WORKS, userId],
    queryFn: () => getAllUserWork({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
