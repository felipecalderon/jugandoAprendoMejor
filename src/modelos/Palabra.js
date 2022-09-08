const mongoose = require("mongoose");

// Esquema de Usuario
const palabraSchema = new mongoose.Schema({
  palabra: {
    type: String,
    required: true,
  },
  pistas: { type: Array },
});

module.exports = mongoose.model("Palabra", palabraSchema);
