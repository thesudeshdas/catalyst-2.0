import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z
    .string({
      required_error: 'First name is required'
    })
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(32, { message: 'First name must be less than 32 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' })
    .max(32, { message: 'Last name must be less than 32 characters' })
    .optional(),
  email: z
    .string({
      required_error: 'Email is required'
    })
    .email('Email is not a valid email address')
    .min(2, { message: 'Email must be at least 2 characters long' })
    .max(32, { message: 'Email must be less than 32 characters' }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at max 32 characters long')
    .refine(
      (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/.test(
          password
        );
      },
      {
        message:
          'Password must be 8-32 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*()_+)'
      }
    )
});
