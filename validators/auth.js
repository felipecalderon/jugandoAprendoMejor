const joi = require("joi");
const { validador } = require("../handle/validador");

const esquemaLogin = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  clave: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

const valida = validador(esquemaLogin);

exports.validaLogin = (req, res, next) => {
  let {email, clave} = req.body
  try {
    const { error, value } = valida(req.body);
    if (error) throw error
    next();
  } catch (error) {
    let {details} = error
    console.log(email, clave);
    
    details.forEach(element => {
      console.log(element.message);
    });
    return res.render("login", {err: JSON.stringify(details), email, clave});
  }
};