const express = require("express");
const {
  crearPalabra,
  verPalabra,
  verPalabraSola,
  actualizarPalabra,
  eliminarPalabra,
  agregarPalabraUsuario,
} = require("../controllers/palabras.control");

const { tieneToken } = require("../middlewares/validaToken");
const route = express.Router();

route.get("/", tieneToken, verPalabra);
route.get("/:nombre", tieneToken, verPalabraSola);
route.put("/:nombre", tieneToken, actualizarPalabra);
route.delete("/:nombre", tieneToken, eliminarPalabra);
route.post("/", tieneToken, crearPalabra);
route.post("/agregar", tieneToken, agregarPalabraUsuario);

module.exports = route;