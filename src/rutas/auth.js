const express = require("express");
const { login, getlogin, registro } = require("../controlador/auth.js");
const { check } = require("express-validator");
const ruta = express.Router();

ruta.get("/", getlogin);
ruta.post("/login", login);

ruta.post("/registro", registro);

module.exports = ruta;
