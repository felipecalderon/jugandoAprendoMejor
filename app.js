const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
dotenv.config();

const port = process.env.PUERTO || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set 'views' directory for any views
app.set("views", path.join(__dirname, "/src/vistas"));
app.set("view engine", "ejs");

// index page
app.use("/", require("./src/rutas/inicio.js"));

app.use("*", (req, res) => {
  res.send("error 404");
});

app.listen(port, () => {
  console.log("Servidor activado en puerto:", port);
});
