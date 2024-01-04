import express from 'express';
import user, { signUp, login } from '../controller/user';
import User from '../model/user';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'sequelize';

const router = express.Router();

//Sign up route
router.get('/signup', (req, res) => {
    
    res.render('signup', {user});
});

router.get('/signup', (req, res) => {

    res.redirect('/login');
});

router.post('/signup', signUp);



// For login
router.get('/zXyk/login', (req, res) => {
    
    res.render('login');
    
});

router.get('/zXyk/login', (req, res) => {
    
    res.redirect('createbooks');
});

router.post('/zXyk/login', login);



router.get('/createbooks', (req, res) => {
        
    res.render('createbooks');

});



export default router;

