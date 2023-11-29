"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostData = void 0;
const zod_1 = require("zod");
const postSchema = zod_1.z.object({
    title: zod_1.z
        .string({
        required_error: 'Title not provided',
        invalid_type_error: 'Title should be letter',
    })
        .trim()
        .min(2, 'Title need to have a min length of 2'),
    datePublished: zod_1.z.string().datetime(),
    description: zod_1.z.string().min(10).max(100),
    pageCount: zod_1.z.number().min(10),
    genre: zod_1.z.string(),
    bookId: zod_1.z.number(),
    publisher: zod_1.z.string().min(2).max(50),
});
function validatePostData(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const validation = postSchema.safeParse(json);
        if (!validation.success) {
            throw validation.error.formErrors;
        }
        return validation.data;
    });
}
exports.validatePostData = validatePostData;
