const { check } = require("express-validator");
const { funcionValida } = require("./../funciones/validadores");
const validaLogin = [
  check("email").exists().notEmpty(),
  check("clave").exists().notEmpty(),
  (req, res, next) => {
    return funcionValida(req, res, next);
  },
];

module.exports = validaLogin;
