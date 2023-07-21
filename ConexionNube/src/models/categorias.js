const mongoose = require("mongoose");

const categoriasSchema = mongoose.Schema(
  {
    Nombre: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: true,
    },
  },
  {
    versionKey: false,
    collection: "categorias",
  }
);

module.exports = mongoose.model("categorias", categoriasSchema);
