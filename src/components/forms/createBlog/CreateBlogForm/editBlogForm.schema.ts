/* eslint-disable no-useless-escape */
import { z } from 'zod';

export const editBlogSchema = z.object({
  title: z
    .string({
      required_error: 'Blog title is required'
    })
    .min(2, { message: 'Blog title must be at least 2 characters long' })
    .max(128, { message: 'Blog title must be less than 128 characters' }),
  link: z.string().refine(
    (link) => {
      return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
        link
      );
    },
    {
      message: 'Blog link must be a valid URL'
    }
  ),
  platform: z.string().optional()
});
