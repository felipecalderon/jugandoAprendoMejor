console.clear();
require("dotenv").config();

//configuraciones y requerimientos
const express = require("express");
const db = require("./src/conexionDb");
const cors = require("cors");
const fs = require("fs")
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Leer las rutas de la carpeta rutas (parece redundante pero es importante, me salió verso sin esfuerzo)
const nomrutas = __dirname + '/src/rutas'
  try {
    const archivos = fs.readdirSync(nomrutas);
    archivos.forEach(archivo => {
      let nombre = archivo.split(".").shift()
      app.use(`/${nombre}`, require(`${nomrutas}/${archivo}`));
    })
} catch (error) {
  console.log(error);
}

// si la ruta no existe
app.use("*", (req, res) => {
  res.send("error 404 | no encontrado");
});

//servidor a la escucha
app.listen(port, () => {
  console.log("Servidor activado:", "http://localhost:" + port);
});
