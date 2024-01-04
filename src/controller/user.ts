import { Request, Response, NextFunction } from 'express';
import { User } from '../model/user';
//import validation from '../validation'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Secret } from 'jsonwebtoken';
import Books from '../model/books';
import { JwtPayload } from 'jsonwebtoken';
import  { verifyToken }  from '../middlewares/authenticate';
import { generateToken } from '../middlewares/authenticate';


 

// For signup

export async function signUp(req: Request, res: Response, next: NextFunction) {
   try {
      const {authorName, email, phoneNumber,id, password} = req.body;

      if( !authorName || !email || !phoneNumber || !password ) {
        return res.status(400).json({
            status: 'Error',
            data: 'Please provide all required fields'
        });
      } 

      const hash = bcrypt.hashSync(password, 10);

      const user = await User.create({
        authorName,
        email,
        id,
        phoneNumber,
        password: hash,
      });

      res.redirect('/login');
    
    } catch (error) {
    res.status(400).json({ error });
    }
  
}


// For login
export async function login(req: Request, res: Response, next: NextFunction) {
  const email = req.body.email;
  const password = req.body.password;
  if(!email || !password ) {
      return res.status(400).json('Please provide email and password');
  }

  const user = await User.findOne({ 
    where: { email: email } 
  }); 

  if(!user) {
      return res.status(404).json({
          error: 'User not found'
      });
  }

  const validPassword = bcrypt.compareSync(password, user.password);
   if(!validPassword) {
       return res.status(400).json({
           error: 'Invalid password'
       });
   }
   
   
  const accessToken = generateToken(user);
  const userId = user.id;
  
  (req.session as any).accessToken = accessToken;
  (req.session as any).userId = userId;
  //console.log(req.session);


  //res.redirect('/createbooks');

  next();
} 
 
 

    


// To find all users
// export async function findAll(req: Request, res: Response, next: NextFunction) {
//    try {
//      const allUsers = await User.findAll();
//      res.status(200).json(allUsers);
//    } catch (error) {
//      console.error('Error retrieving all users:', error);
//      res.status(500).json({ error: 'Internal Server Error' });
//    }
//  }

// To find one user
// export async function findOne(req: Request, res: Response, next: NextFunction) {
//    try {
//      const userId = req.params.id;
//      const user = await User.findByPk(userId);
 
//      if (!user) {
//        res.status(404).json({ error: 'User not found' });
//      } else {
//        res.status(200).json(user);
//      }
//    } catch (error) {
//      console.error('Error retrieving user details:', error);
//      res.status(500).json({ error: 'Internal Server Error' });
//    }
//  }


export default {
    signUp,
    login,
    //findAll,
    //findOne,
};





