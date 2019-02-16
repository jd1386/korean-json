const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();

// use logger
app.use(logger('dev'));

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('OK');
});

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
