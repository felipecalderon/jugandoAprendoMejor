const mongoose = require("mongoose");

// Esquema de Usuario
const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    clave: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created", updatedAt: "updated" },
  }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
