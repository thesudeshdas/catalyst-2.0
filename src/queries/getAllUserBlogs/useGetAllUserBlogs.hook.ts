import { useQuery } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import * as apiKeys from '../../constants/apisKeys.constants';
import { IGetAllUserBlogsBody } from '../../types/blogTypes/blog.types';
import { IUserBlog } from '../../types/userTypes/user.types';

const getAllUserBlogs = (req: IGetAllUserBlogsBody): Promise<IUserBlog[]> =>
  axiosClient.get(`blog/${req.userId}`).then((res) => res.data.blogs);

export function useGetAllUserBlogs({ userId }: IGetAllUserBlogsBody) {
  return useQuery({
    queryKey: [apiKeys.blogs.GET_USER_BLOGS, userId],
    queryFn: () => getAllUserBlogs({ userId }),
    enabled: Boolean(userId) && userId !== ''
  });
}
