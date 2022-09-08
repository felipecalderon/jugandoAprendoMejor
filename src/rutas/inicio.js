//const { cors } = require("cors")
const express = require("express");
const { inicio } = require("../controlador/inicio");
const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

ruta.get("/", inicio);

//ruta.get("/login", tieneToken, getlogin);

module.exports = ruta;
