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
    if (!palabra || !pista) {
      return res.status(400).json({
        error: `Necesita ingresar correctamente palabra y pista`,
      });
    }
    let palabramin = palabra.toString().toLowerCase();
    let pistamin = pista.toString().toLowerCase();

    const palabraExiste = await Palabra.findOne({ palabra: palabramin });
    if (palabraExiste) {
      return res.status(400).json({
        error: `La palabra |${palabramin}| ya está en el sistema.`,
      });
    }
    // crea palabra
    const palabraCreada = Palabra.create({
      palabra: palabramin,
      pista: [pistamin],
    });
    res.json({
      Palabra: await palabraCreada,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.eliminarPalabra = async (req, res) => {
  try {
    let { nombre } = req.params;
    let nombremin = nombre.toString().toLowerCase();
    const palabra = await Palabra.findOneAndDelete({ palabra: nombremin });
    if (!palabra) {
      return res.status(400).json({
        error: `Palabra |${nombremin}| no encontrada`,
      });
    }
    res.json(`Palabra ${nombremin} eliminada`);
  } catch (error) {
    console.log(error);
  }
};
