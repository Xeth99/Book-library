import express from 'express';
// import { params } from '../schema/schema';

import { User } from '../model/user';
// import express from 'express';
// import { User } from '../model/user';

const router = express.Router();


// CRUD operation for User Model
// app.get('/users', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// app.get('/users/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   res.json(user);
// });

// app.post('/users', async (req, res) => {
//   const user = await User.create(req.body);
//   res.json(user);
// });

// app.put('/users/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   if (user) {
//     await user.update(req.body);
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// app.delete('/users/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   if (user) {
//     await user.destroy();
//     res.json({ message: 'User deleted' });
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });


/* GET users listing. */
// import bodyParser from 'body-parser';

// router.get('/', function(req, res, next) {
//   //console.log(process.env.NODE_ENV)
//   res.send('respond with a resource');
// });

// router.get('/', (req, res) => {
//   res.status(200).json(req.body);
// });

// router.post('/', bodyParser.json(), (req, res) => {
//   res.status(200).json(req.body);
// });

// router.put('/', bodyParser.json(), (req, res) => {
//   res.status(200).json(req.body);
// });

// import { User } from '../model/user';

// router.delete('/', bodyParser.json(), (req, res) => {
//   res.status(200).json(req.body);
// });

// // to get a specific user
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   const user = User.find((user: { id: string }) => user.id === id);
//     res.send(200).json(user);
// });

// router.post('/:id', bodyParser.json(), (req, res) => {
//   res.status(200).json(req.body);
// });

// router.put('/:id', bodyParser.json(), (req, res) => {
//   res.status(200).json(req.body);
// });

// router.delete('/:id', bodyParser.json(), (req, res) => {
//   res.status(200).json(req.body);
// });

// export default router;






// import express from 'express';
// import User from '../model/user'; 
// import Note from '../model/note'; 




// const router = express.Router();


router.get('/', async (req, res) => {
    console.log("here");
    
  try {
    const users = await User.findAll();
    console.log(users);

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/', async (req, res) => {
  const { authorName, email, phoneNumber } = req.body;
  try {
    const newUser = await User.create({ 
      authorName, 
      email, 
      id: uuid(), 
      phoneNumber
    });

    res.status(201).json({
      message: "User created successfully",
      newUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
    console.error(Error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
);

function uuid(): number {
  throw new Error('Function not implemented.');
}

export default router;



