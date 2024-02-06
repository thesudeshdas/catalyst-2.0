import { z } from 'zod';

export const editProfileSocialSchema = z.object({
  github: z.string(),
  gitlab: z.string(),
  twitter: z.string(),
  linkedIn: z.string(),
  medium: z.string(),
  hashnode: z.string(),
  devTo: z.string(),
  instagram: z.string(),
  dribbble: z.string(),
  behance: z.string(),
  youtube: z.string()
});
