import { z } from 'zod';

export const editProfileSocialSchema = z.object({
  github: z.string().optional(),
  gitlab: z.string().optional(),
  twitter: z.string().optional(),
  linkedIn: z.string().optional(),
  medium: z.string().optional(),
  hashnode: z.string().optional(),
  devTo: z.string().optional(),
  instagram: z.string().optional(),
  dribbble: z.string().optional(),
  behance: z.string().optional(),
  youtube: z.string().optional()
});
