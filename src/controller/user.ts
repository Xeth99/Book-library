import { Request, Response, NextFunction } from 'express';
import { validatePostData } from '../utils';
import { User } from '../model/user';

async function signUp(req: Request, res: Response, next: NextFunction) {
 const {authorName, email, id, phoneNumber} = req.body;
 try {
  await validatePostData({authorName, email, id, phoneNumber}); 
  next();
 } catch (error) {
  res.status(400).json({ error });
 }

 const user = User.create({
    authorName: req.body.authorName,
    email: req.body.email,
    id: req.body.id,
    phoneNumber: req.body.phoneNumber
 })

 if(await user) {
    res.status(200).json({
        status: 'User created successfully',
        data: user
    });
 } 
 else {
    res.status(400).json({message: 'User not created'});
 }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // const user = User.create({
    //     authorName: req.body.authorName,
    //     email: req.body.email,
    //     id: req.body.id,
    //     phoneNumber: req.body.phoneNumber,
    //     password: hashedPassword
    // })
    
    
}

async function login(req: Request, res: Response, next: NextFunction) {
 const { email, phoneNumber} = req.body;
 try {
  await validatePostData({email, phoneNumber}); 
  next();
 } catch (error) {
  res.status(400).json({ error });
 }

 const user = User.create({
    authorName: req.body.authorName,
    email: req.body.email,
    id: req.body.id,
    phoneNumber: req.body.phoneNumber
 })

 if(await user) {
    res.status(200).json({
        status: 'User created successfully',
        data: user
    });
 } 
 else {
    res.status(400).json({message: 'User not created'});
 }
    
}
export default {
    signUp,
    login
};
