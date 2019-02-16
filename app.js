const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models');
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
  db.User.findAll().then(users => {
    res.json(users);
  });
});

// connect to database and run seeders
db.sequelize.sync({ force: true }).then(() => {
  console.log('db started');
  seeders.firstGroup();
});

// start server
const port = parseInt(process.env.PORT) || 5000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
