//const { cors } = require("cors")
const express = require("express");
const { inicio } = require("../controlador/inicio.js");
const ruta = express.Router();

ruta.get("/", inicio);

module.exports = ruta;
