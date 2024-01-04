import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import sequelize from './config/database.config';
import session from 'express-session';
import * as dotenv from 'dotenv';
import usersRouter from './routes/users';
import booksRouter from './routes/book';
import homeRouter from './routes/home';

dotenv.config()
const app = express();
const api = process.env.API_URL;


//sequelize instance
sequelize.sync()
.then(() => {
  console.log('Database & tables created!');
})
.catch((err) => {
  console.log('Error!', err);
});


// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

//packages
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


//cookies - for authentication
// app.use(
//   session({
//     secret: 'Your-default-secret-key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );

app.use(
  session({
    secret: 'Your-default-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }, // Use secure cookie in production
  })
);

//Routes
app.use(`${api}`, homeRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/books`, booksRouter);




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;
