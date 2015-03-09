var express = require('express');
var path = require('path');
var url = require('url');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/base');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('trust proxy', 1); // trust first proxy
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'yizhicheng', cookie: { maxAge: 60000 }}));
// session 处理
app.use(function (req, res, next){
    var s = req.session;
    res.locals.userinfo = s && s.userinfo ? s.userinfo : '';
    res.locals.pathname = url.parse(req.url).pathname;
    console.log(res.locals.pathname);
    next();
});
// 设置路由
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
