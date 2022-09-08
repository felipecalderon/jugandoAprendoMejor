const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const db = require("./src/conexionDb");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// index page
app.use("/auth", require("./src/rutas/auth.js"));

app.use("/", require("./src/rutas/inicio.js"));

app.use("*", (req, res) => {
  res.send("error 404");
});

app.listen(port, () => {
  console.log("Servidor activado:", "http://localhost:" + port);
});
