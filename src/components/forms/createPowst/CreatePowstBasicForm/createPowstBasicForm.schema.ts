/* eslint-disable no-useless-escape */
import { z } from 'zod';

export const createPowstBasicSchema = z.object({
  title: z
    .string({
      required_error: 'Project name is required'
    })
    .min(2, { message: 'Project name must be at least 3 characters long' })
    .max(32, { message: 'Project name must be less than 320 characters long' }),
  live: z
    .string()
    .refine(
      (link) => {
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          link
        );
      },
      {
        message: 'Live Preview must be a valid URL'
      }
    )
    .optional(),
  source: z
    .string()
    .refine(
      (link) => {
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          link
        );
      },
      {
        message: 'Source code must be a valid URL'
      }
    )
    .optional()
});
