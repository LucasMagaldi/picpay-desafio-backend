import { z } from 'zod'

export const userSchema = z.object({
    type: z.enum(['comum', 'lojista']),
    name: z.string().min(1, 'name is required'),
    cpf: z.string().regex(/^\d{11}$/, 'CPF should contains 11 characters'),
    email: z.string().email('the field should be and valid email address'),
})