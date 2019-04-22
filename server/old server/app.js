// Express server dependencies 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// New Code
const mongoose = require("mongoose");
var cors = require('cors');
var monk = require('monk');
var db = monk('localhost:27017/psychcentral');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Added
app.use(cors());

// view engine setup 
// This tells the app where to find its views, what engine...
// ...to use to render those views (EJS), and calls a few methods to get things up and running.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // jade or ejs acceptable

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Directives telling express which route files to use
// App.use statements establish middleware for Express

// Added - Make our db accessible to our router
//  due to chaining these need to come before our route definitions, so that they can make use of it.
app.use(function(req,res,next){
  req.db = db;
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/psychcentral", {useNewUrlParser: true }) 
// "mongodb://localhost/articles");
//mongoose.connect("mongodb://jenn:MongoDB123@ds249530.mlab.com:49530/heroku_nsbpkh6c")
//let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));



module.exports = app;
