import express, { Router } from 'express';
import {authenticate}  from '../middlewares/authenticate';
import {
  createBooks,
  getAllBooks,
  getBookDetails,
  editBook,
  deleteBook,
} from '../controller/books';

const router: Router = express.Router();


router.get('/createbooks', authenticate, createBooks, (req, res) =>  {
    res.render('/createbooks');

    res.redirect('/books');
   
});

router.post('/createbooks', authenticate, createBooks);





//router.get('/books', getAllBooks);

// router.get('/books', (req, res) => {
//   res.render('books', { books: getAllBooks });
// });

router.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks; 
    res.render('books', { books });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/books/:id', getBookDetails);

router.put('/books/:id', authenticate, editBook);

router.delete('/books/:id', authenticate, deleteBook);






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
  console.log(books)
});

export default router;

