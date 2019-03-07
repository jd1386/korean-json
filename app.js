import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import cors from 'cors';
import exphbs from 'express-handlebars';
import apicache from 'apicache';
import { sequelize, User, Post, Todo, Comment, Album, ApiStat } from './models';
import seeders from './seeders';
import {
  usersRouter,
  postsRouter,
  todosRouter,
  commentsRouter,
  albumsRouter
} from './routes';

// initialize app instance
const app = express();

// middlewares
// use morgan
(env => {
  switch (env) {
    case 'development':
      app.use(morgan('dev'));
      break;
    case 'production':
      app.use(morgan('combined'));
      break;
  }
})(process.env.NODE_ENV);

// helmet
app.use(helmet());

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
app.use(cors());
// public folder
app.use(express.static(path.join(__dirname, 'public')));
// view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => {
  res.render('home');
});
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/todos', todosRouter);
app.use('/comments', commentsRouter);
app.use('/albums', albumsRouter);

// connect to database and run seeders
sequelize.sync();
// .then(() => {
//   return seeders.firstGroup();
// })
// .then(() => {
//   return seeders.secondGroup();
// })
// .then(() => {
//   return seeders.thirdGroup();
// })
// .catch(error => console.log(error));

// start server
const port = parseInt(process.env.PORT) || 5000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
