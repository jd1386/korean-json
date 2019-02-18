import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import { sequelize, User, Post, Todo, Comment, ApiStat } from './models';
import seeders from './seeders';
import usersRouter from './routes/users';
import postsRouter from './routes/posts';
import todosRouter from './routes/todos';
import commentsRouter from './routes/comments';

// initialize app instance
const app = express();

// use logger
app.use(logger('dev'));

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/todos', todosRouter);
app.use('/comments', commentsRouter);

// connect to database and run seeders
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('db started');
    return seeders.firstGroup();
  })
  .then(() => {
    console.log('second group seeders');
    return seeders.secondGroup();
  })
  .catch(error => console.log(error));

// start server
const port = parseInt(process.env.PORT) || 5000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
