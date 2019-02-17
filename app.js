const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
import { sequelize, User, Post } from './models';
const seeders = require('./seeders');
const http = require('http');
const app = express();

// use logger
app.use(logger('dev'));

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/users', (req, res) => {
  User.findAll().then(users => {
    res.json(users);
  });
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  if (id) {
    const user = await User.findByPk(id);
    res.json(user);
  }
});

app.get('/posts', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;

  if (id) {
    const post = await Post.findByPk(id);
    res.json(post);
  }
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
