var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials')
var session  = require('express-session');
var methodOverride = require('methodOverride');

var index = require('./routes/index');
var user = require('./routes/user');
var post = require('./routes/post');
var reg = require('./routes/reg');
var doReg = require('./routes/doReg');
var login = require('./routes/login');
var doLogin = require('./routes/doLogin');
var logout = require('./routes/logout');

var MongoStore = require('connect-mongo')(session);
var settings = require('../microblog1/settings');

var app = express();

//app.configure(function(){
  app.set('Views',__dirname + '/../chapter5/microblog1/views');
  app.set('View engine','ejs');
  app.use(partials());
  app.use(bodyParser());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(session({
    secret:settings.cookiesSecret,
    store:new MongoStore({
      db:settings.db
    })
  }));
  app.use(express.router(routes));
  app.use(express.static(__dirname + '/chapter5/microblog1/public'));
//});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());

app.use('/', index);
app.use('/u/:user', user);
app.use('/post', post);
app.use('/reg', reg);
app.use('/reg', doReg);
app.use('/login', login);
app.use('/login', doLogin);
app.use('/logout', logout);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
