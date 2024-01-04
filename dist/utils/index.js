"use strict";
// import express, {Request, Response, NextFunction} from 'express';
// import {z} from 'zod';
// const postSchema = z.object({  
//     title: z    
//     .string({      
//         required_error: 'Title not provided',      
//         invalid_type_error: 'Title should be letter',    
//     })    
//     .trim()    
//     .min(2, 'Title need to have a min length of 2'),      
//     datePublished: z.string().datetime(),  
//     description: z.string().min(10).max(100),  
//     pageCount: z.number().min(10),  
//     genre: z.string(),  
//     bookId: z.number(),  
//     publisher: z.string().min(2).max(50),
// });
// export async function validatePostData(json: unknown){  
//     const validation = postSchema.safeParse(json);  
//     if (!validation.success) {    
//         throw validation.error.formErrors;  
//     }  
//     return validation.data;
// }
