/* eslint-disable no-useless-escape */
import { z } from 'zod';

export const createPowstDescriptionSchema = z.object({
  description: z
    .string({
      required_error: 'Description is required'
    })
    .min(2, { message: 'Description must be at least 2 characters long' })
});
