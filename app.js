/**
 * app
 *
 * Main app request and response routing
 *
 * @type {}
 */

const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const list_background = {};
fs.readFileSync(path.join(__dirname, 'css_colours.txt'), "utf8").split("\n")
    .forEach(line => {
        let tmp = line.toLowerCase().trim().split(',');
        list_background[tmp[0]] = tmp[1];
    });


app.set('list_background', list_background);

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
