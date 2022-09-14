const mongoose = require("mongoose");

// Esquema de Usuario
const palabraSchema = new mongoose.Schema({
  palabra: {
    type: String,
    required: true,
  },
  pista: { type: Array },
});

module.exports = mongoose.model("Palabra", palabraSchema);