const Usuario = require("../models/auth.model");
const { hash } = require("../handle/hash");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const bcrypt = require("bcrypt");

// AUTH
exports.getlogin = async (req, res) => {
  
  try {
    const token = req.headers["auth-token"];
    const { id } = jwt_decode(token);
    const usuarioActivo = await Usuario.findOne({ _id: id }).populate('palabras');
    res.append("auth-token", token).render('index', {usuarioActivo});
  } catch (error) {
    res.render('login/', {err: 'Credenciales no válidas'});
  }
};
// AUTH/LOGIN
exports.login = async (req, res) => {
  let {email, clave} = req.body
  // Primero buscamos si el correo coincide con la data en mongo
  const usernameExiste = await Usuario.findOne({
    $or: [{ email: req.body.email }, { username: req.body.email }],
  });
  if (!usernameExiste) {
    return res.render('login/', {err: 'Usuario no encontrado', datos: {
      email, clave
    }});
  }
  try {
    bcrypt.compare(
      req.body.clave,
      usernameExiste.clave,

      function (error, bien) {
        // si ocurre un error con la comparación del form con la data de mongo se mostrara acá
        if (error) {
          res.status(401).json(error);
        }

        // si la clave del form es la misma que la hasheada en mongo se genera el token
        if (bien) {
          const token = jwt.sign(
            {
              id: usernameExiste._id,
              //token expira en 12 horas:
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12,
            },
            //agregada variable de entorno
            process.env.TOKENSECRETO
          );

          // envío del token al header
          res.cookie("auth-token", token, {httpOnly: true}).render('index', {usernameExiste});


          // callback con la respuesta negativa en caso que las claves no coincidan
        } else {
          return res.render('login/', {err: 'Credenciales no válidas', datos: {
            email, clave
          }});
        }
      }
    );
  } catch (error) {
    return res.render('login/', {err: error, datos: {
      email, clave
    }});
  }
};

// AUTH/REGISTRO
exports.registro = async (req, res) => {
  
  let {email} = req.body
  const userNameExiste = await Usuario.findOne({ username: req.body.username });

  if (userNameExiste) {
    return res.status(400).json({
      error: `Nombre de usuario: ${req.body.username} Ya está en uso.`,
    });
  }

  const emailExiste = await Usuario.findOne({ email: req.body.email });
  if (emailExiste) {
    return res.status(400).json({
      error: "Correo ya registrado",
    });
  }
  // crea usuario
  const usuario = new Usuario({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    username: req.body.username,
    email: req.body.email,
    clave: hash(req.body.clave),
  });

  // almacena algún error si lo hubiese
  try {
    const UsuarioBD = await usuario.save();
    res.render('login/', {err: 'Cuenta creada, ingresa a la app con tus datos'});
  } catch (error) {
    res.render('login/', {err: error, datos: {email}});
  }
};
 exports.cerrarsesion = (req, res) => {
  res.clearCookie("auth-token");
  return res.render('login/', {err: 'Has cerrado tu sesión', datos: ''});
 }