/* eslint-disable no-useless-escape */
import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
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
      console.log('from schema exist', files?.length, files);

      return files?.length > 0 || files;
    }, 'Image is required.')
    .refine((files) => {
      console.log('from schema size', files?.size);

      return files?.size <= MAX_FILE_SIZE || files?.size === undefined;
    }, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      '.jpg, .jpeg, and .png files are accepted.'
    )
});
