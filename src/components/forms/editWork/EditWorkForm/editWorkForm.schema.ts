/* eslint-disable no-useless-escape */
import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const editWorkSchema = z.object({
  company: z
    .string({
      required_error: 'Company name is required'
    })
    .min(2, { message: 'Company name must be at least 2 characters long' })
    .max(32, { message: 'Company name must be less than 32 characters' }),
  companyWebsite: z
    .string()
    .refine(
      (link) => {
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          link
        );
      },
      {
        message: 'Company website must be a valid URL'
      }
    )
    .optional(),
  startDate: z.object({
    month: z.string({ required_error: 'Please enter a valid date' }),
    year: z.string({ required_error: 'Please enter a valid date' })
  }),
  endDate: z.object({
    month: z.string({ required_error: 'Please enter a valid date' }),
    year: z.string({ required_error: 'Please enter a valid date' })
  }),
  designation: z
    .string({
      required_error: 'Designation is required'
    })
    .min(2, { message: 'Designation must be at least 2 characters long' })
    .max(32, { message: 'Designation must be less than 32 characters' }),
  workType: z
    .string({
      required_error: 'Type of work is required'
    })
    .min(2, { message: 'Type of work must be at least 2 characters long' })
    .max(32, { message: 'Type of work must be less than 32 characters' }),
  location: z.string().optional(),
  description: z.string().optional(),
  companyLogo: z
    .any()
    .refine((files) => files?.length > 0 || files, 'Company logo is required.')
    .refine(
      (files) => files?.size <= MAX_FILE_SIZE || files?.size === undefined,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      '.jpg, .jpeg, and .png files are accepted.'
    )
    .optional(),
  techStack: z
    .array(z.object({ name: z.string(), version: z.string() }))
    .optional(),
  keywords: z.array(z.object({ text: z.string() })).optional()
});
