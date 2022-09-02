const authLogin = async (req, res) => {
  const { correo, clave } = req.body;
  try {
    if (correo) {
      return res.render("./paginas/login", {
        correo,
        err: null,
      });
    }
    res.render("./paginas/login", {
      err: "Usuario o clave incorrectos",
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { authLogin };
