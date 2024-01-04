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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../middlewares/authenticate");
const books_1 = require("../controller/books");
const router = express_1.default.Router();
router.get('/createbooks', authenticate_1.authenticate, books_1.createBooks, (req, res) => {
    res.render('/createbooks');
    res.redirect('/books');
});
router.post('/createbooks', authenticate_1.authenticate, books_1.createBooks);
//router.get('/books', getAllBooks);
// router.get('/books', (req, res) => {
//   res.render('books', { books: getAllBooks });
// });
router.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield books_1.getAllBooks;
        res.render('books', { books });
    }
    catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    }
}));
router.get('/books/:id', books_1.getBookDetails);
router.put('/books/:id', authenticate_1.authenticate, books_1.editBook);
router.delete('/books/:id', authenticate_1.authenticate, books_1.deleteBook);
router.get('/books', (req, res) => {
    const books = [
        {
            title: 'Half of a yellow sun',
            datePublished: '2023-10-09',
            description: 'All about Action',
            pageCount: 150,
            genre: 'Romance/Drama',
            publisher: 'Nnena',
        }
    ];
    res.render('books', { books });
    console.log(books);
});
exports.default = router;
