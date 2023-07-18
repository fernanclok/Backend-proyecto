const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    Nombre: {
        type: String,
        required: true,
    },
    ApellPaterno: {
        type: String,
        required: true,
    },
    ApellMaterno: {
        type: String,
    },
    Correo: {
        type: String,
        required: true,
    },
    Usuario: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
  },
  {
    versionKey: false,
    collection: "administradores",
  }
);

module.exports = mongoose.model("Administradores", AdminSchema);
