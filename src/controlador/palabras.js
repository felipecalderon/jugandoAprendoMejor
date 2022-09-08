const Palabra = require("../modelos/Palabra");

exports.verPalabra = async (req, res) => {
  const palabras = await Palabra.find();
  if (palabras.length === 0) {
    return res.json({ error: "No se encuentran palabras" });
  }
  res.json(palabras);
};

exports.crearPalabra = async (req, res) => {
  const palabraExiste = await Palabra.findOne({ palabra: req.body.palabra });

  if (palabraExiste) {
    return res.status(400).json({
      error: `La palabra ${req.body.palabra} ya está en el sistema.`,
    });
  }
  // crea usuario
  const palabra = new Palabra({
    palabra: req.body.palabra,
    pistas: [req.body.pistas],
  });

  // almacena algún error si lo hubiese
  try {
    const nuevaPalabra = await palabra.save();
    res.json({
      error: null,
      usuarioCreado: nuevaPalabra,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
