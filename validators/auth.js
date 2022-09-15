const joi = require("joi");
const { validador } = require("../handle/validador");

const esquemaLogin = joi.object({
  email: joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "cl"] },
    })
    .messages({
      'string.base': `Ingrese formato de correo`,
      'string.empty': `Ingrese correo`,
      'string.required': `Correo obligatorio`,
      'string.email': `Verifique que el correo esté bien escrito`
    }),
  clave: joi.string()
    .messages({
      'string.empty': `Ingrese clave`
    }),
});

const valida = validador(esquemaLogin);

exports.validaLogin = (req, res, next) => {
  let {email, clave} = req.body
  try {
    const { error } = valida(req.body);
    if (error) throw error
    next();
  } catch (error) {
    let {details} = error
    return res.render("login/", {
      err: details, 
      datos: {
        email, clave
      }
    });
  }
};