const express = require("express");
const ruta = express.Router();
const { login, getlogin, registro } = require("../controlador/auth.js");
const { validaLogin } = require("../validadores/auth");

ruta.post("/login", validaLogin, login);
ruta.post("/registro", registro);
ruta.get("/", getlogin);

module.exports = ruta;
