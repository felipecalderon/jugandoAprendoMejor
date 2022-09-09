const express = require("express");
const {
  crearPalabra,
  verPalabra,
  verPalabraSola,
  actualizarPalabra,
} = require("../controlador/palabras");

const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

ruta.get("/", verPalabra);
ruta.get("/:nombre", verPalabraSola);
ruta.put("/:nombre", actualizarPalabra);
ruta.post("/", crearPalabra);

module.exports = ruta;
