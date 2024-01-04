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
exports.deleteBook = exports.editBook = exports.getBookDetails = exports.getAllBooks = exports.createBooks = void 0;
const books_1 = __importDefault(require("../model/books"));
const createBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.session.userId;
        console.log(req.session);
        console.log('userId: ', userId);
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const { title, datePublished, description, pageCount, genre, publisher } = req.body;
        console.log(title, datePublished, description, pageCount, genre, publisher);
        const createdBook = yield books_1.default.create({
            title,
            datePublished,
            description,
            pageCount,
            genre,
            publisher,
            userId: userId,
        });
        yield createdBook.save();
        res.redirect('/books');
    }
    catch (error) {
        console.error('Error creating a book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createBooks = createBooks;
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield books_1.default.findAll();
        res.status(200).json(allBooks);
        return res.render('books', { allBooks });
    }
    catch (error) {
        console.error('Error retrieving all books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllBooks = getAllBooks;
const getBookDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = parseInt(req.params.id, 10);
        const book = yield books_1.default.findByPk(bookId);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
        }
        else {
            res.status(200).json(book);
        }
    }
    catch (error) {
        console.error('Error retrieving book details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getBookDetails = getBookDetails;
const editBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = (req.params.id);
        const updatedBook = req.body;
        const updatedBooks = yield books_1.default.update(updatedBook, {
            where: { id: bookId },
            //returning: true,
        });
        if (!updatedBooks) {
            res.status(404).json({ error: 'Book not found' });
        }
        else {
            res.status(200).json({ message: 'Book updated successfully', updatedBooks });
        }
    }
    catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.editBook = editBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = (req.params.id);
        //const rowToDelete = await Books.findOne({where: {id: bookId}})
        const rowToDelete = yield books_1.default.findOne({ where: { id: bookId } });
        if (!rowToDelete) {
            res.status(404).json({ error: 'Book not found' });
        }
        else {
            res.status(200).json({ message: 'Book deleted successfully' });
        }
        ;
    }
    catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteBook = deleteBook;
