//const { cors } = require("cors")
const express = require("express");
const { inicio, inicio2 } = require("../controlador/inicio.js");
const ruta = express.Router();

ruta.get("/", inicio2);

module.exports = ruta;
