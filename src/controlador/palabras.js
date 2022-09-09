const Palabra = require("../modelos/Palabra");

exports.verPalabra = async (req, res) => {
  try {
    const palabras = await Palabra.find();
    if (palabras.length === 0) {
      return res.json({ error: "No se encuentran palabras" });
    }
    res.json(palabras);
  } catch (error) {
    console.log(error);
  }
};

exports.verPalabraSola = async (req, res) => {
  try {
    const { nombre } = req.params;
    if (nombre) {
      const palabra = await Palabra.findOne({ palabra: nombre });
      if (palabra === null) {
        return res.json({ error: `No se encontró: ${nombre}` });
      }
      return res.json(palabra);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.actualizarPalabra = async (req, res) => {
  try {
    const { nombre } = req.params;
    let { pista } = req.body;

    nombremin = nombre.toString().toLowerCase();
    pistamin = pista.toString().toLowerCase();

    const palabraExiste = await Palabra.findOne({ palabra: nombremin });
    console.log(palabraExiste);
    if (palabraExiste === null) {
      return res.status(400).json({
        error: `La palabra |${nombremin}| NO existe en el sistema, añadala.`,
      });
    }
    actualizaPala = await Palabra.findOneAndUpdate(
      { palabra: nombremin },
      { $set: { pista: pistamin } }
    );
    res.json(actualizaPala);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.crearPalabra = async (req, res) => {
  try {
    let { palabra, pista } = req.body;
    palabramin = palabra.toString().toLowerCase();
    pistamin = pista.toString().toLowerCase();

    const palabraExiste = await Palabra.findOne({ palabra: palabramin });
    if (palabraExiste) {
      return res.status(400).json({
        error: `La palabra |${palabramin}| ya está en el sistema.`,
      });
    }
    // crea palabra
    const palabraCreada = new Palabra({
      palabra: palabramin,
      pista: [pistamin],
    });

    // almacena algún error si lo hubiese
    const nuevaPalabra = await palabraCreada.save();
    res.json({
      error: null,
      usuarioCreado: nuevaPalabra,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
