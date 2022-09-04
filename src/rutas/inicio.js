//const { cors } = require("cors")
const express = require("express");
const { getlogin } = require("../controlador/auth.js");
const { verificaToken } = require("../middlewares/validatoken");
const ruta = express.Router();

ruta.get("/", getlogin);

ruta.get("/login", verificaToken, getlogin);

module.exports = ruta;
