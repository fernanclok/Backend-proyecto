const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    _id: {
        type: Number,
        required: true,
    },
    Empresa: {
        type: String,
        required: true,
    },
    Zona_asignada: {
        type: Number,
        required: true,
    },
  },
  {
    versionKey: false,
    collection: "clientes",
  }
);

module.exports = mongoose.model("clientes", AdminSchema);
