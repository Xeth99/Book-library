import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.get('/login', (req, res) => {
  res.render('login', {title: 'Login'})
});

router.post('/form', (req, res) => {
  res.render('form')
});

router.put('/views/', (req, res) => {
  res.render('form')
});

router.delete('/viws/', (req, res) => {
  res.render('form')
});


export default router;
