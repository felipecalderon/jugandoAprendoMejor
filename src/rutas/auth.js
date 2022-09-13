const express = require("express");
const ruta = express.Router();
const { login, getlogin, registro } = require("../controlador/auth.js");
const { tieneToken } = require("../middlewares/validaToken");
const { validaLogin } = require("../validadores/auth");

ruta.post("/login", validaLogin, login);
ruta.post("/registro", registro);
ruta.get("/", tieneToken, getlogin);

module.exports = ruta;
