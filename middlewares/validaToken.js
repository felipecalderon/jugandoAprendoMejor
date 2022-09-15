const jwt = require("jsonwebtoken");

exports.tieneToken = (req, res, next) => {
  let {email} = req.body
  if (!email) email = '';

  // busca en el header el token
  const token = req.headers.cookie;
  
  //si el token no existe envía error
  if(!token){
    return res.render('login/', { err: 'Accede para jugar' , datos: email});
  }

  //si el token existe pasa pal inicio
  const arreglocookie = token.split('=')
  const verificado = jwt.verify(arreglocookie[1], process.env.TOKENSECRETO);
  req.usuario = verificado;
  console.log(req.usuario);
  next();
};
