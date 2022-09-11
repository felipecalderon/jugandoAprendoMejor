const joi = require("joi");
const { validador } = require("../funciones/validador");

const esquemaLogin = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  clave: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

const valida = validador(esquemaLogin);

exports.validaLogin = (req, res, next) => {
  try {
    const { error, value } = valida(req.body);
    if (error) throw error
    next();
  } catch (error) {
    return res.json(error.details);
  }
};