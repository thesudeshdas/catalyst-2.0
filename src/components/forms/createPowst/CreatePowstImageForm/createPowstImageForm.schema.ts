import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const createPowstImageSchema = z.object({
  alt: z
    .string()
    .min(2, { message: 'Project name must be at least 2 characters long' })
    .max(32, { message: 'Project name must be less than 32 characters' })
    .optional(),
  image: z
    .any()
    .refine((files) => files?.length > 0 || files, 'Image is required.')
    .refine(
      (files) => files?.size <= MAX_FILE_SIZE || files?.size === undefined,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      '.jpg, .jpeg, and .png files are accepted.'
    )
});
