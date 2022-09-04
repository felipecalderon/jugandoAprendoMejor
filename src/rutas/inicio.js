//const { cors } = require("cors")
const express = require("express");
const { getlogin } = require("../controlador/auth.js");
const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

ruta.get("/", getlogin);

ruta.get("/login", tieneToken, getlogin);

module.exports = ruta;
