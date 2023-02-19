const express = require('express');
const path = require('path');
const session = require('express-session');
const indexRouter = require('./routes/index');

const app = express();

app.use(
  session({
    secret: 'keyboard cat',
    cookie: {},
    resave: false,
    saveUninitialized: true,
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

module.exports = app;
