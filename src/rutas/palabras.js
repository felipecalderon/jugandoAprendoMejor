const express = require("express");
const {
  crearPalabra,
  verPalabra,
  verPalabraSola,
} = require("../controlador/palabras");
const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

ruta.get("/", verPalabra);
ruta.get("/:nombre", verPalabraSola);
ruta.post("/crear", crearPalabra);

module.exports = ruta;
