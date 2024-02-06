import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const editProfileBasicSchema = z.object({
  firstName: z
    .string({
      required_error: 'First name is required'
    })
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(32, { message: 'First name must be less than 32 characters' }),
  lastName: z
    .string({
      required_error: 'Last name is required'
    })
    .min(2, { message: 'Last name must be at least 2 characters long' })
    .max(32, { message: 'Last name must be less than 32 characters' }),
  email: z
    .string({
      required_error: 'Email is required'
    })
    .email('Email is not a valid email address')
    .min(2, { message: 'Email must be at least 2 characters long' })
    .max(32, { message: 'Email must be less than 32 characters' }),
  location: z.string({
    required_error: 'Location is required'
  }),
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
});
