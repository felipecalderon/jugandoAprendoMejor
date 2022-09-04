const jwt = require("jsonwebtoken");

exports.tieneToken = (req, res, next) => {
  // busca en el header el token
  const token = req.header("auth-token");
  //si el token no existe envía error
  try {
    // verifica si el token es válido con la secret key
    const verificado = jwt.verify(token, process.env.TOKENSECRETO);
    req.usuario = verificado;
    next();
  } catch (error) {
    return res.render("./paginas/login", {
      err: "acceso no autorizado / ingrese nuevamente",
    });
  }
};
