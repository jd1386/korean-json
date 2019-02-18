import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { sequelize, User, Post, Todo, Comment, ApiStat } from './models';
import seeders from './seeders';
import { ApiStatCounter } from './util';
import http from 'http';

// initialize app instance
const app = express();

// use logger
app.use(logger('dev'));

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/users', async (req, res) => {
  ApiStatCounter('users');
  const users = await User.findAll();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  ApiStatCounter('posts');

  const user = await User.findByPk(id);
  res.json(user);
});

app.get('/posts', async (req, res) => {
  try {
    const { userId } = req.query;
    ApiStatCounter('posts');

    if (userId) {
      const user = await User.findByPk(userId);
      const posts = await user.getPosts();
      return res.json(posts);
    }

    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByPk(id);
  ApiStatCounter('posts');
  res.json(post);
});

app.get('/todos', async (req, res) => {
  try {
    ApiStatCounter('todos');
    const { userId } = req.query;

    if (userId) {
      const user = await User.findByPk(userId);
      const todos = await user.getTodos();
      return res.json(todos);
    }

    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

app.get('/todos/:id', async (req, res) => {
  const { id } = req.params;
  ApiStatCounter('posts');
  const todo = await Todo.findByPk(id);
  res.json(todo);
});

app.get('/comments', async (req, res) => {
  ApiStatCounter('comments');

  const comments = await Comment.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'username', 'email']
      },
      {
        model: Post
      }
    ],
    order: [['id', 'asc']]
  });
  res.json(comments);
});

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
