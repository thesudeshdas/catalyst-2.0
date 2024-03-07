import { z } from 'zod';

export const createPowstDescriptionSchema = z.object({
  description: z
    .string({
      required_error: 'Description is required'
    })
    .min(20, { message: 'Description must be at least 20 characters long' })
});
