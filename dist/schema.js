"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.updateNoteSchema = exports.params = exports.createBookSchema = void 0;
const zod_1 = require("zod");
exports.createBookSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }),
        datePublished: zod_1.z.string({
            required_error: "Content is required",
        }),
        description: zod_1.z.string().optional(),
        pageCount: zod_1.z.boolean().optional(),
        genre: zod_1.z.string().optional(),
    }),
});
exports.params = zod_1.z.object({
    bookId: zod_1.z.string(),
});
exports.updateNoteSchema = zod_1.z.object({
    params: exports.params,
    body: zod_1.z
        .object({
        title: zod_1.z.string(),
        datePublished: zod_1.z.string(),
        description: zod_1.z.string(),
        pageCount: zod_1.z.boolean(),
        genre: zod_1.z.string(),
        bookId: zod_1.z.number(),
        publisher: zod_1.z.string(),
    })
        .partial(),
});
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            params: req.params,
            query: req.query,
            body: req.body,
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({
                status: "fail",
                errors: error.errors,
            });
        }
        next(error);
    }
};
exports.validate = validate;
