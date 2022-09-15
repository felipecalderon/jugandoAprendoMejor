
const express = require("express");
const router = express.Router();
const { login, getlogin, registro, cerrarsesion } = require("../controllers/auth.control");
const { validaLogin } = require("../validators/auth");

router.get("/", getlogin);
router.post("/login", validaLogin, login);
router.post("/registro", registro);
router.get("/cerrarsesion", cerrarsesion, login);

module.exports = router;