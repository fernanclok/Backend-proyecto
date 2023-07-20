const mongoose = require("mongoose");

const categoriasSchema = mongoose.Schema(
  {
    _id: {
        type: Number,
        required: true,
    },
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
