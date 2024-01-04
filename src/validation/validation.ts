import {z} from 'zod';

export const signupSchema = z.object({
     
    authorName: z.string({
        required_error: 'Author name is required!' 
    })
    .trim()
    .min(5, 'Minimum of 5 character is required!')
    .max(50, 'Maximum of character is required'),

    email: z.string({
        required_error: 'Please, provide correct email!'
    })
    .email(),

    phoneNumber: z.string({
        required_error: 'Provide phone number.'
    })
    .min(11)
    .max(13),

    password: z.string({
        required_error: 'Password is required!'
    })
    .min(6, 'Password must be at least minimum of 6 characters')
    .max(50)
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    )
})


export const loginSchema = z.object({

    email: z.string({
        required_error: 'Please, provide correct email!'
    })
    .email(),

    password: z.string({
        required_error: 'Password is required!'
    })
    .min(6, 'Password must be at least minimum of 6 characters')
    .max(50)
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    )
})

export const bookSchema = z.object({
    
    title: z
    .string({
        required_error: 'Please, provide the title'
    })
    .min(10, 'Title must be at least 10 character long')
    .max(200),

    datePublished: z
    .string()
    .regex(
        /^\d{2}-\d{2}-\d{4}$/,
        'Invalid date formate'
    ),

    description: z
    .string({
        required_error: 'Provide the description'
    })
    .min(10),

    pageCount: z.number(),

    genre: z.string({
        required_error: 'Please, provide the genre!'
    }),

    publisher: z.string({
        required_error: 'Name of Publisher is required'
    })
    .min(10)
    .max(200)
  
})