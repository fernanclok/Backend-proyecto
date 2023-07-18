const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
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
