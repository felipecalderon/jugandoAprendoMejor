var express = require('express');
var router = express.Router();

// Leer las rutas de la presente carpeta (parece redundante pero es importante, me salió verso sin esfuerzo 😎)
const fs = require("fs")
const nomrutas = __dirname

const archivos = fs.readdirSync(nomrutas);
  archivos.forEach(archivo => {
    let nombre = archivo.split(".").shift()
    if (nombre !== 'index') {
    router.use(`/${nombre}`, require(`${nomrutas}/${archivo}`));
  }
})

module.exports = router;
