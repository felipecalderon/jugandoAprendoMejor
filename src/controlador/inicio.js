const Usuario = require("../modelos/Usuario");

exports.inicio = async (req, res) => {
  try {
    usuarios = Usuario.find();
    if (!usuarios) {
      return res.json({ err: "No hay usuarios" });
    }
    res.json({ usuarios });
  } catch (error) {
    console.log(error);
  }
  res.json({ err: null });
};
