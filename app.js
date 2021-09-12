var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listsRouter = require('./routes/lists');

var app = express();

app.locals.con = mysql.createConnection( {
  host: "eu-cdbr-west-01.cleardb.com",
  user: "ba152ba3547b4e",
  password: "6f0da12e",
  database: "heroku_5bbbbdc798c6ee3"
});

mysql://ba152ba3547b4e:6f0da12e@eu-cdbr-west-01.cleardb.com/heroku_5bbbbdc798c6ee3?reconnect=true


// app.locals.con = mysql.createConnection( {
//   host: "localhost",
//   port: "8889",
//   user: "todoUser",
//   password: "todoUser",
//   database: "todo"
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lists', listsRouter);

module.exports = app;
