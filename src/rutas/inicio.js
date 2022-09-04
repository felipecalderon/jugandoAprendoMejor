//const { cors } = require("cors")
const express = require("express");
const { getlogin } = require("../controlador/auth.js");
const usuarioAutorizado = require("../middlewares/validatoken");
const ruta = express.Router();

ruta.get("/", getlogin);

ruta.get("/login", usuarioAutorizado, getlogin);

module.exports = ruta;
