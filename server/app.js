var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var performanceRouter = require('./routes/performance');
var teacher_registerationRouter = require('./routes/teacher_registeration');
var senior_registerationRouter = require('./routes/senior_registeration');
var guestsRouter = require('./routes/guests');
var menuRouter = require('./routes/menu');


var app = express();

app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/performance', performanceRouter);
app.use('/teacher_family', teacher_registerationRouter);
app.use('/senior_students', senior_registerationRouter);
app.use('/guests', guestsRouter);
app.use('/menu', menuRouter);

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

module.exports = app;
