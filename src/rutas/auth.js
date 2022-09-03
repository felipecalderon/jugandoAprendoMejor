const express = require("express");
const { login, registro } = require("../controlador/auth.js");
const { check } = require("express-validator");
const ruta = express.Router();

ruta.post("/login", login);

ruta.post("/registro", registro);

module.exports = ruta;
