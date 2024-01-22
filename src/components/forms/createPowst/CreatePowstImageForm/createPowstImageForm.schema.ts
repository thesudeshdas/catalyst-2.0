/* eslint-disable no-useless-escape */
import { z } from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const createPowstImageSchema = z.object({
  alt: z
    .string()
    .min(2, { message: 'Project name must be at least 3 characters long' })
    .max(32, { message: 'Project name must be less than 320 characters long' })
    .optional(),
  image: z
    .any()
    .refine((files) => {
      console.log('from schema', files?.length);

      return files !== undefined;
    }, 'Image is required.')
    .refine((files) => {
      console.log('from schema', files?.size);

      return files?.size <= MAX_FILE_SIZE;
    }, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      '.jpg, .jpeg, and .png files are accepted.'
    )
});
