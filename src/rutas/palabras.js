const express = require("express");
const {
  crearPalabra,
  verPalabra,
  verPalabraSola,
  actualizarPalabra,
  eliminarPalabra,
  agregarPalabraUsuario,
} = require("../controlador/palabras");

const { tieneToken } = require("../middlewares/validaToken");
const ruta = express.Router();

ruta.get("/", tieneToken, verPalabra);
ruta.get("/:nombre", tieneToken, verPalabraSola);
ruta.put("/:nombre", tieneToken, actualizarPalabra);
ruta.delete("/:nombre", tieneToken, eliminarPalabra);
ruta.post("/", tieneToken, crearPalabra);
ruta.post("/agregar", tieneToken, agregarPalabraUsuario);

module.exports = ruta;
