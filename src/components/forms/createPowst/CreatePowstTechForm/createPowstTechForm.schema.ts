/* eslint-disable no-useless-escape */
import { z } from 'zod';

export const createPowstTechSchema = z.object({
  tech: z.string()
});
