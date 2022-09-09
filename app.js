console.clear();
require("dotenv").config();
const express = require("express");
const db = require("./src/conexionDb");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// index page
app.use("/auth", require("./src/rutas/auth"));

app.use("/", require("./src/rutas/inicio"));

app.use("/texto", require("./src/rutas/palabras"));

app.use("*", (req, res) => {
  res.send("error 404");
});

app.listen(port, () => {
  console.log("Servidor activado:", "http://localhost:" + port);
});
