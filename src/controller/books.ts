import { Request, Response } from "express"
import Books from '../model/books';
import user from "./user";



export const createBooks = async (req: Request, res: Response) => {
  try {
    
    
    const userId = (req.session as any).userId;
    console.log(req.session)
    console.log('userId: ', userId);
   
    if(!userId){
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const { title, datePublished, description, pageCount, genre, publisher } = req.body;
    console.log(title, datePublished, description, pageCount, genre, publisher);

    const createdBook = await Books.create({
      title,
      datePublished,
      description,
      pageCount,
      genre,
      publisher,
      userId: userId,
    });

    await createdBook.save();
  
    res.redirect('/books');

  } catch (error) {
      console.error('Error creating a book:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allBooks = await Books.findAll();
    res.status(200).json(allBooks);
    return res.render('books', {allBooks});
    
  } catch (error) {
    console.error('Error retrieving all books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const getBookDetails = async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id, 10);
    const book = await Books.findByPk(bookId);

    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    console.error('Error retrieving book details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const editBook = async (req: Request, res: Response) => {
  try {
    const bookId = (req.params.id);
    const updatedBook: Books = req.body;
    const updatedBooks = await Books.update(updatedBook, {
      where: { id: bookId },
      //returning: true,
    });
    
    if (!updatedBooks) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.status(200).json({message: 'Book updated successfully', updatedBooks});
    }
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = (req.params.id);
    //const rowToDelete = await Books.findOne({where: {id: bookId}})
    const rowToDelete = await Books.findOne({where: {id: bookId}})

    if (!rowToDelete) {
      res.status(404).json({ error: 'Book not found' });
    }
    else{
      res.status(200).json({message: 'Book deleted successfully'});
    };
   
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
