"use strict";
// import { z } from "zod";
// export const createBookSchema = z.object({
//   body: z.object({
//     title: z.string({
//       required_error: "Title is required",
//     }),
//     datePublished: z.string({
//       required_error: "Content is required",
//     }),
//     description: z.string().optional(),
//     pageCount: z.boolean().optional(),
//     genre: z.string().optional(),
//   }),
// });
// export const params = z.object({
//   bookId: z.string(),
// });
// export const updateNoteSchema = z.object({
//   params,
//   body: z
//     .object({
//       title: z.string(),
//       datePublished: z.string(),
//       description: z.string(),
//       pageCount: z.boolean(),
//       genre: z.string(),
//       bookId: z.number(),
//       publisher: z.string(),
//     })
//     .partial(),
// });
// export type ParamsInput = z.TypeOf<typeof params>;
// export type CreateNoteInput = z.TypeOf<typeof createBookSchema>["body"];
// export type UpdateNoteInput = z.TypeOf<typeof updateNoteSchema>;
// export const validate = (schema: any) => (req: any, res: any, next: any) => {
//   try {
//     schema.parse({
//       params: req.params,
//       query: req.query,
//       body: req.body,
//     });
//     next();
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({
//         status: "fail",
//         errors: error.errors,
//       });
//     }
//     next(error);
//   }
// };
