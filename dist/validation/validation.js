"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSchema = exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    authorName: zod_1.z.string({
        required_error: 'Author name is required!'
    })
        .trim()
        .min(5, 'Minimum of 5 character is required!')
        .max(50, 'Maximum of character is required'),
    email: zod_1.z.string({
        required_error: 'Please, provide correct email!'
    })
        .email(),
    phoneNumber: zod_1.z.string({
        required_error: 'Provide phone number.'
    })
        .min(11)
        .max(13),
    password: zod_1.z.string({
        required_error: 'Password is required!'
    })
        .min(6, 'Password must be at least minimum of 6 characters')
        .max(50)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character')
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string({
        required_error: 'Please, provide correct email!'
    })
        .email(),
    password: zod_1.z.string({
        required_error: 'Password is required!'
    })
        .min(6, 'Password must be at least minimum of 6 characters')
        .max(50)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character')
});
exports.bookSchema = zod_1.z.object({
    title: zod_1.z
        .string({
        required_error: 'Please, provide the title'
    })
        .min(10, 'Title must be at least 10 character long')
        .max(200),
    datePublished: zod_1.z
        .string()
        .regex(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date formate'),
    description: zod_1.z
        .string({
        required_error: 'Provide the description'
    })
        .min(10),
    pageCount: zod_1.z.number(),
    genre: zod_1.z.string({
        required_error: 'Please, provide the genre!'
    }),
    publisher: zod_1.z.string({
        required_error: 'Name of Publisher is required'
    })
        .min(10)
        .max(200)
});
