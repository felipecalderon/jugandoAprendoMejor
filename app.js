console.clear()
require("./conexionDb");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { tieneToken } = require("./middlewares/validaToken");
const {Inicio} = require("./controllers/inicio.control")
app.get('/', tieneToken, Inicio);
app.use('/api', require("./routes/index"))

// catch 404 and forward to error handler
app.use('*', (req, res) => {
  res.render("login/", {err: "ERROR 404 - Ruta no encontrada", datos: ''})
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message);
  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;
