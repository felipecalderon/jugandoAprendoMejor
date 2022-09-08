//const { cors } = require("cors")
const express = require("express");
const { inicio } = require("../controlador/inicio");
const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

module.exports = ruta.get("/", tieneToken, inicio);

//ruta.get("/login", tieneToken, getlogin);
