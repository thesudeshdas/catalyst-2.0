import { z } from 'zod';

export const editProfileBasicSchema = z.object({
  bio: z
    .string()
    .min(10, { message: 'Short bio must be at least 10 characters long' })
    .max(250, { message: 'Short bio must be less than 250 characters' })
    .optional()
});
