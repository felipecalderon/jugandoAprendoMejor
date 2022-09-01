const authLogin = async (req, res) => {
  const { correo, clave } = req.body;
  try {
    if (correo) {
      return res.render("./paginas/login", {
        err: null,
        correo,
      });
    }
    res.render("./paginas/inicio", { err: "Error al ingresar" });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { authLogin };
