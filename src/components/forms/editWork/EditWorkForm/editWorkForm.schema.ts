import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const editWorkSchema = z.object({
  firstName: z
    .string({
      required_error: 'First name is required'
    })
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(32, { message: 'First name must be less than 32 characters' }),
  lastName: z
    .string()
    .max(32, { message: 'Last name must be less than 32 characters' })
    .optional(),
  email: z
    .string()
    .email('Email is not a valid email address')
    .min(2, { message: 'Email must be at least 2 characters long' })
    .max(32, { message: 'Email must be less than 32 characters' })
    .optional(),
  location: z
    .string({
      required_error: 'Location is required'
    })
    .optional(),
  headline: z.string().optional(),
  profilePic: z
    .any()
    .refine(
      (files) => files?.length > 0 || files,
      'Profile picture is required.'
    )
    .refine(
      (files) => files?.size <= MAX_FILE_SIZE || files?.size === undefined,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      '.jpg, .jpeg, and .png files are accepted.'
    )
    .optional(),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long' })
    .max(32, { message: 'Username must be less than 32 characters' })
    .optional()
});
