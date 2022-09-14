
const express = require("express");
const router = express.Router();
const { login, getlogin, registro } = require("../controllers/auth.control");
const { tieneToken } = require("../middlewares/validaToken");
const { validaLogin } = require("../validators/auth");

router.get("/", getlogin);
router.post("/login", validaLogin, login);
router.post("/registro", registro);

module.exports = router;