var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { err: null, title: 'Express' });
});

// Leer las rutas de la presente carpeta (parece redundante pero es importante, me salió verso sin esfuerzo 😎)
const fs = require("fs")
const nomrutas = __dirname
  try {
    const archivos = fs.readdirSync(nomrutas);
    archivos.forEach(archivo => {
      let nombre = archivo.split(".").shift()
      if (nombre !== 'index') {
        router.use(`/${nombre}`, require(`${nomrutas}/${archivo}`));
      }
    })
} catch (error) {
  console.log(error);
}



module.exports = router;
