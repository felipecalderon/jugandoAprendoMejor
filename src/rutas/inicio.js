//const { cors } = require("cors")
const express = require("express");
const { getlogin } = require("../controlador/auth.js");
const ruta = express.Router();

ruta.get("/", getlogin);

module.exports = ruta;
