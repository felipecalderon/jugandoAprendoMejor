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

ruta.get("/", verPalabra);
ruta.get("/:nombre", verPalabraSola);
ruta.put("/:nombre", actualizarPalabra);
ruta.delete("/:nombre", eliminarPalabra);
ruta.post("/", crearPalabra);
ruta.post("/agregar", agregarPalabraUsuario);

module.exports = ruta;
