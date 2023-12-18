import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const LoginValidation = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(5, 'Password must have than 10 characters'),
})

export const RegisterValidation = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(5, 'Password must have than 10 characters'),
})


export type RegisterFormType = z.infer<typeof RegisterValidation>
export const registerResolver = zodResolver(RegisterValidation)


export type LoginFormType = z.infer<typeof LoginValidation>
export const loginResolver = zodResolver(LoginValidation)
