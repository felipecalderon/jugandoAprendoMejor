const express = require("express");
const { authLogin } = require("../controlador/auth.js");
const { check } = require("express-validator");
const ruta = express.Router();

ruta.post("/login", authLogin);

module.exports = ruta;
