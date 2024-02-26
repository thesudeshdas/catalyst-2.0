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
  figma: z.string().optional(),
  dribbble: z.string().optional(),
  behance: z.string().optional(),
  youtube: z.string().optional(),
  wellfound: z.string().optional(),
  freelancer: z.string().optional(),
  upwork: z.string().optional(),
  fiverr: z.string().optional(),
  producthunt: z.string().optional(),
  portfolio: z.string().optional()
});
