import { useMutation } from '@tanstack/react-query';

import axiosClient from '../../config/axiosInstance';
import queryClient from '../../config/queryClient';
import * as apiKeys from '../../constants/apisKeys.constants';
import { IBlog, ICreateBlogBody } from '../../types/blogTypes/blog.types';
import { IUserBlog } from '../../types/userTypes/user.types';

const createBlog = (req: ICreateBlogBody): Promise<IBlog> =>
  axiosClient.post(`/blog`, req).then((res) => res.data);

export default function useCreateBlog() {
  return useMutation({
    mutationKey: [apiKeys.blogs.CREATE_USER_BLOG],
    mutationFn: createBlog,
    onSuccess: (data: IBlog) => {
      queryClient.setQueryData(
        [apiKeys.blogs.GET_USER_BLOGS],
        (prevData: IUserBlog[]) => {
          return prevData ? [...prevData, { blog: data }] : [{ blog: data }];
        }
      );
    }
  });
}
