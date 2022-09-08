const express = require("express");
const { crearPalabra, verPalabra } = require("../controlador/palabras");
const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

ruta.get("/", verPalabra);
ruta.post("/crear", crearPalabra);

module.exports = ruta;
